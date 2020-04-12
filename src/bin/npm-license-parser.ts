#!/usr/bin/env node
import clear from 'clear';
import program from 'commander';
import {CrawlerOptions} from "npm-license-crawler";
import LicenseParser from "../lib/LicenseParser.js";

const options: CrawlerOptions = {
  start: ['./'],
};

clear();
console.log('NPM License Parser');
const version = process.env.npm_package_version || '0';

program
  .version(version)
  .description("An License CLI for displaying dependencies.")
  .option('-t, --dependencies', 'Show only third-party licenses')
  .option('--development', 'Show only development dependencies')
  .option('-e, --exclude <path>', 'Path to a directory to be excluded from the search')
  .option('-d, --onlyDirectDependencies', 'Show only direct dependencies licenses')
  .option('-d, --production', 'Show only production dependencies licenses')
  .option('-j, --json <path>', 'Export data as JSON to the given file')
  .option('-s, --start <path>', 'The start path to search')
  .parse(process.argv);

if (program.dependencies) options.dependencies = true;
if (program.development) options.development = true;
if (program.exclude) options.exclude = program.exclude;
if (program.onlyDirectDependencies) options.onlyDirectDependencies = true;
if (program.production) options.production = true;
if (program.start) options.start = program.start;
if (program.json) options.json = program.json;
const parser = new LicenseParser(options);
parser.parse();
