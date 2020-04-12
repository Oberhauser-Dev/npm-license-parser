# npm-license-parser

Parse infos and licenses of npm dependencies to json format for displaying

## Usage (TODO to be verified)

### CLI

`npm i npm-license-parser -g` 

or 

`npm install npm-license-parser --save-dev`

Add to scripts to be executed after `npm install`:

```
"scripts": {
    "postinstall": "npm-license-parser --onlyDirectDependencies --json src/path/licenses.json"
  }
```

### API

`npm i npm-license-parser` 

```
import LicenseParser from "npm-license-parser"

const options = {
  exclude: ['.'],
  json: 'licenses.json',
  onlyDirectDependencies: true,
  start: ['./'],
  unknown: true,
};
const parser = new LicenseParser(options);
parser.parse()

```
