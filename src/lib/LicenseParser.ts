import crawler, {CrawlerOptions} from 'npm-license-crawler';
import LicenseItem from "./LicenseItem";
import stripAnsi from 'strip-ansi';

export default class LicenseParser {

  private options: CrawlerOptions;

  constructor(options: CrawlerOptions) {
    this.options = options;
  }

  public async parse(): Promise<LicenseItem[]> {
    return new Promise((resolve, reject) => {
      const callBack = (error: any, res: any) => {
        if (error) {
          return reject(error);
        } else {
          let licenses = Object.keys(res).map((key: any) => this.extractData(stripAnsi(key), res[key]));
          licenses = this.sortDataByKey(licenses, 'username');
          return resolve(licenses);
        }
      };
      crawler.dumpLicenses(this.options, callBack);
    });
  }

  private extractNameFromGithubUrl(url: string): any {
    if (!url) {
      return null;
    }

    const reg = /((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9\_\-]*)(!\/([a-z\-]))?/i;
    const components = reg.exec(url);

    if (components && components.length > 5) {
      return components[5];
    }
    return null;
  }

  private sortDataByKey(data: any[], key: string): any[] {
    data.sort((a: any, b: any) => {
      return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
    });
    return data;
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private extractData(key: string, val: any): LicenseItem {
    const {licenses, ...license} = val;
    const [name, version] = key.split('@').filter(n => n); // filter empty (as packages may begin with @)
    const username =
      this.extractNameFromGithubUrl(license.repository) ||
      this.extractNameFromGithubUrl(license.licenseUrl);

    let userUrl;
    let image;
    let displayName;
    if (username) {
      image = `http://github.com/${username}.png`;
      userUrl = `http://github.com/${username}`;
      let usNames = username.split('-');
      usNames = usNames.map((usname: string) => this.capitalizeFirstLetter(usname));
      displayName = usNames.join(' ');
    }

    return {
      key,
      name,
      image,
      userUrl,
      username: displayName,
      licenses: licenses.slice(0, 405),
      version,
      ...license,
    };
  }
}
