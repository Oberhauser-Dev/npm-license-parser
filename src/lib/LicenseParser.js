import crawler from 'npm-license-crawler';
import stripAnsi from 'strip-ansi';
import { promises as fs } from 'fs';
export default class LicenseParser {
    constructor(options) {
        this.options = options;
    }
    async parse() {
        return new Promise((resolve, reject) => {
            const callBack = (error, res) => {
                if (error) {
                    return reject(error);
                }
                else {
                    let licenses = Object.keys(res).map((key) => this.extractData(stripAnsi(key), res[key]));
                    licenses = this.sortDataByKey(licenses, 'username');
                    return resolve(licenses);
                }
            };
            crawler.dumpLicenses(this.options, callBack);
        });
    }
    async json(path) {
        const json = JSON.stringify(await this.parse());
        await fs.writeFile(path, json);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGljZW5zZVBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpY2Vuc2VQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUF5QixNQUFNLHFCQUFxQixDQUFDO0FBRTVELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQyxNQUFNLElBQUksQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWE7SUFJaEMsWUFBWSxPQUF1QjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQVUsRUFBRSxHQUFRLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNMLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3BELE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7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