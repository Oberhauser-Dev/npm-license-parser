#!/usr/bin/env node
import clear from 'clear';
import program from 'commander';
import {CrawlerOptions} from "npm-license-crawler";
import LicenseParser from "../lib/LicenseParser.js";

const options: CrawlerOptions = {
  //exclude: ['.'],
  //json: 'licenses.json',
  onlyDirectDependencies: true,
  //start: ['../..'],
  start: ['./'],
  //unknown: true,
};

clear();
console.log('NPM License Parser');
const version = process.env.npm_package_version || '0';

program
  .version(version)
  .description("An example CLI for ordering pizza's")
  .option('-j, --json <path>', 'Export License in specified path')
  .option('-s, --start <path>', 'The start path to search')
  .parse(process.argv);

if (program.start) options.start = program.start;
const parser = new LicenseParser(options);
if (program.json) parser.json(program.json);
