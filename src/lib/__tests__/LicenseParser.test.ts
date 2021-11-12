import LicenseParser from "../LicenseParser";

const options = {
  //exclude: ['.'],
  json: 'licenses.json',
  onlyDirectDependencies: true,
  //start: ['../..'],
  start: ['./'],
  //unknown: true,
};
const parser = new LicenseParser(options);
await parser.parse();
