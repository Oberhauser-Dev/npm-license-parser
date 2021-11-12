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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGljZW5zZVBhcnNlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGljZW5zZVBhcnNlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sYUFBYSxNQUFNLGtCQUFrQixDQUFDO0FBRTdDLE1BQU0sT0FBTyxHQUFHO0lBQ2QsaUJBQWlCO0lBQ2pCLElBQUksRUFBRSxlQUFlO0lBQ3JCLHNCQUFzQixFQUFFLElBQUk7SUFDNUIsbUJBQW1CO0lBQ25CLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztJQUNiLGdCQUFnQjtDQUNqQixDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUMsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMifQ==