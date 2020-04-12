import { CrawlerOptions } from 'npm-license-crawler';
import LicenseItem from "./LicenseItem";
export default class LicenseParser {
    private options;
    constructor(options: CrawlerOptions);
    parse(): Promise<LicenseItem[]>;
    private json;
    private extractNameFromGithubUrl;
    private sortDataByKey;
    private capitalizeFirstLetter;
    private extractData;
}
