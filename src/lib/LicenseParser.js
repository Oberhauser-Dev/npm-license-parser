import crawler from 'npm-license-crawler';
import stripAnsi from 'strip-ansi';
import { promises as fs } from 'fs';
export default class LicenseParser {
    constructor(options) {
        this.options = options;
    }
    async parse() {
        return new Promise((resolve, reject) => {
            const callBack = async (error, res) => {
                if (error) {
                    return reject(error);
                }
                else {
                    let licenses = Object.keys(res).map((key) => this.extractData(stripAnsi(key), res[key]));
                    licenses = this.sortDataByKey(licenses, 'username');
                    await this.json(licenses);
                    return resolve(licenses);
                }
            };
            crawler.dumpLicenses(this.options, callBack);
        });
    }
    async json(licenses) {
        const json = JSON.stringify(licenses);
        await fs.writeFile(this.options.json || 'licences.json', json);
    }
    extractNameFromGithubUrl(url) {
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
    sortDataByKey(data, key) {
        data.sort((a, b) => {
            return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
        });
        return data;
    }
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    extractData(key, val) {
        const { licenses, ...license } = val;
        const [name, version] = key.split('@').filter(n => n); // filter empty (as packages may begin with @)
        const username = this.extractNameFromGithubUrl(license.repository) ||
            this.extractNameFromGithubUrl(license.licenseUrl);
        let userUrl;
        let image;
        let displayName;
        if (username) {
            image = `http://github.com/${username}.png`;
            userUrl = `http://github.com/${username}`;
            let usNames = username.split('-');
            usNames = usNames.map((usname) => this.capitalizeFirstLetter(usname));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGljZW5zZVBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpY2Vuc2VQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUF5QixNQUFNLHFCQUFxQixDQUFDO0FBRTVELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQyxNQUFNLElBQUksQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWE7SUFJaEMsWUFBWSxPQUF1QjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsS0FBVSxFQUFFLEdBQVEsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLEtBQUssRUFBRTtvQkFDVCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0wsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlGLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDcEQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMxQixPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDMUI7WUFDSCxDQUFDLENBQUM7WUFDRixPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFP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