#!/usr/bin/env node
import clear from 'clear';
import program from 'commander';
import LicenseParser from "../lib/LicenseParser.js";
const options = {
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
if (program.dependencies)
    options.dependencies = true;
if (program.development)
    options.development = true;
if (program.exclude)
    options.exclude = program.exclude;
if (program.onlyDirectDependencies)
    options.onlyDirectDependencies = true;
if (program.production)
    options.production = true;
if (program.start)
    options.start = program.start;
if (program.json)
    options.json = program.json;
const parser = new LicenseParser(options);
parser.parse();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWxpY2Vuc2UtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnBtLWxpY2Vuc2UtcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBRWhDLE9BQU8sYUFBYSxNQUFNLHlCQUF5QixDQUFDO0FBRXBELE1BQU0sT0FBTyxHQUFtQjtJQUM5QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDZCxDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUM7QUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxHQUFHLENBQUM7QUFFdkQsT0FBTztLQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUM7S0FDaEIsV0FBVyxDQUFDLDZDQUE2QyxDQUFDO0tBQzFELE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxnQ0FBZ0MsQ0FBQztLQUM5RCxNQUFNLENBQUMsZUFBZSxFQUFFLG9DQUFvQyxDQUFDO0tBQzdELE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxvREFBb0QsQ0FBQztLQUNwRixNQUFNLENBQUMsOEJBQThCLEVBQUUsd0NBQXdDLENBQUM7S0FDaEYsTUFBTSxDQUFDLGtCQUFrQixFQUFFLDRDQUE0QyxDQUFDO0tBQ3hFLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx1Q0FBdUMsQ0FBQztLQUNwRSxNQUFNLENBQUMsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUM7S0FDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV2QixJQUFJLE9BQU8sQ0FBQyxZQUFZO0lBQUUsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDdEQsSUFBSSxPQUFPLENBQUMsV0FBVztJQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3BELElBQUksT0FBTyxDQUFDLE9BQU87SUFBRSxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDdkQsSUFBSSxPQUFPLENBQUMsc0JBQXNCO0lBQUUsT0FBTyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztBQUMxRSxJQUFJLE9BQU8sQ0FBQyxVQUFVO0lBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEQsSUFBSSxPQUFPLENBQUMsS0FBSztJQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUNqRCxJQUFJLE9BQU8sQ0FBQyxJQUFJO0lBQUUsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQzlDLE1BQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyJ9