#!/usr/bin/env node
import clear from 'clear';
import program from 'commander';
import LicenseParser from "../lib/LicenseParser.js";
const options = {
    //exclude: ['.'],
    //json: 'licenses.json',
    onlyDirectDependencies: true,
    //start: ['../..'],
    start: ['./'],
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
if (program.start)
    options.start = program.start;
const parser = new LicenseParser(options);
if (program.json)
    parser.json(program.json);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLWxpY2Vuc2UtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibnBtLWxpY2Vuc2UtcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sYUFBYSxNQUFNLHlCQUF5QixDQUFDO0FBRXBELE1BQU0sT0FBTyxHQUFHO0lBQ2QsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLG1CQUFtQjtJQUNuQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FFZCxDQUFDO0FBRUYsS0FBSyxFQUFFLENBQUM7QUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxHQUFHLENBQUM7QUFFdkQsT0FBTztLQUNKLE9BQU8sQ0FBQyxPQUFPLENBQUM7S0FDaEIsV0FBVyxDQUFDLHFDQUFxQyxDQUFDO0tBQ2xELE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxrQ0FBa0MsQ0FBQztLQUMvRCxNQUFNLENBQUMsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUM7S0FDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV2QixJQUFJLE9BQU8sQ0FBQyxLQUFLO0lBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLElBQUksT0FBTyxDQUFDLElBQUk7SUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9