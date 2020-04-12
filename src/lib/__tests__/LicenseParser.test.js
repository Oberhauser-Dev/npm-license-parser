import LicenseParser from "../LicenseParser";
const options = {
    //exclude: ['.'],
    //json: 'licenses.json',
    onlyDirectDependencies: true,
    //start: ['../..'],
    start: ['./'],
};
const parser = new LicenseParser(options);
//parser.parse();
parser.json('dependencyLicenses.json');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGljZW5zZVBhcnNlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGljZW5zZVBhcnNlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sYUFBYSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE1BQU0sT0FBTyxHQUFHO0lBQ2QsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLG1CQUFtQjtJQUNuQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FFZCxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUMsaUJBQWlCO0FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyJ9