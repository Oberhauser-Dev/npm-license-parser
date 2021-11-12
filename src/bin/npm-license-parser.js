#!/usr/bin/env node
import clear from 'clear';
import { Command } from 'commander';
import LicenseParser from "../lib/LicenseParser.js";
const licenseOptions = {
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
if (opts.dependencies)
    licenseOptions.dependencies = true;
if (opts.development)
    licenseOptions.development = true;
if (opts.exclude)
    licenseOptions.exclude = opts.exclude;
if (opts.onlyDirectDependencies)
    licenseOptions.onlyDirectDependencies = true;
if (opts.production)
    licenseOptions.production = true;
if (opts.start)
    licenseOptions.start = opts.start;
if (opts.json)
    licenseOptions.json = opts.json;
const parser = new LicenseParser(licenseOptions);
await parser.parse();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWxpY2Vuc2UtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnBtLWxpY2Vuc2UtcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLGFBQWEsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRCxNQUFNLGNBQWMsR0FBbUI7SUFDbkMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ2hCLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQztBQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEdBQUcsQ0FBQztBQUV2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBRTlCLE9BQU87S0FDRixPQUFPLENBQUMsT0FBTyxDQUFDO0tBQ2hCLFdBQVcsQ0FBQyw2Q0FBNkMsQ0FBQztLQUMxRCxNQUFNLENBQUMsb0JBQW9CLEVBQUUsZ0NBQWdDLENBQUM7S0FDOUQsTUFBTSxDQUFDLGVBQWUsRUFBRSxvQ0FBb0MsQ0FBQztLQUM3RCxNQUFNLENBQUMsc0JBQXNCLEVBQUUsb0RBQW9ELENBQUM7S0FDcEYsTUFBTSxDQUFDLDhCQUE4QixFQUFFLHdDQUF3QyxDQUFDO0tBQ2hGLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSw0Q0FBNEMsQ0FBQztLQUN4RSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsdUNBQXVDLENBQUM7S0FDcEUsTUFBTSxDQUFDLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDO0tBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVk7SUFBRSxjQUFjLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUMxRCxJQUFJLElBQUksQ0FBQyxXQUFXO0lBQUUsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDeEQsSUFBSSxJQUFJLENBQUMsT0FBTztJQUFFLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4RCxJQUFJLElBQUksQ0FBQyxzQkFBc0I7SUFBRSxjQUFjLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQzlFLElBQUksSUFBSSxDQUFDLFVBQVU7SUFBRSxjQUFjLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN0RCxJQUFJLElBQUksQ0FBQyxLQUFLO0lBQUUsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ2xELElBQUksSUFBSSxDQUFDLElBQUk7SUFBRSxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDakQsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMifQ==