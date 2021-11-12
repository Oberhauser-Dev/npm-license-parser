#!/usr/bin/env node
import clear from 'clear';
import {Command} from 'commander';
import {CrawlerOptions} from "npm-license-crawler";
import LicenseParser from "../lib/LicenseParser.js";

const licenseOptions: CrawlerOptions = {
    start: ['./'],
};

clear();
console.log('NPM License Parser');
const version = process.env.npm_package_version || '0';

const program = new Command();

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

const opts = program.opts();
if (opts.dependencies) licenseOptions.dependencies = true;
if (opts.development) licenseOptions.development = true;
if (opts.exclude) licenseOptions.exclude = opts.exclude;
if (opts.onlyDirectDependencies) licenseOptions.onlyDirectDependencies = true;
if (opts.production) licenseOptions.production = true;
if (opts.start) licenseOptions.start = opts.start;
if (opts.json) licenseOptions.json = opts.json;
const parser = new LicenseParser(licenseOptions);
await parser.parse();
