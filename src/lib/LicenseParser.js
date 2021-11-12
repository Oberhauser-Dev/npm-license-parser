import crawler from 'npm-license-crawler';
import stripAnsi from 'strip-ansi';
import { promises as fs } from 'fs';
export default class LicenseParser {
    options;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGljZW5zZVBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpY2Vuc2VQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUF5QixNQUFNLHFCQUFxQixDQUFDO0FBRTVELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQyxNQUFNLElBQUksQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWE7SUFFeEIsT0FBTyxDQUFpQjtJQUVoQyxZQUFZLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLEtBQUssRUFBRSxLQUFVLEVBQUUsR0FBUSxFQUFFLEVBQUU7Z0JBQzlDLElBQUksS0FBSyxFQUFFO29CQUNULE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDTCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUYsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFCLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxZQUFZLENB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