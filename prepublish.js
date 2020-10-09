const fs = require('fs');
const path = require('path');

const PACKAGE_FILE = path.join(__dirname, 'package.json');
const mainPackageData = fs.readFileSync(PACKAGE_FILE, 'utf-8');
const mainPackage = JSON.parse(mainPackageData);

delete mainPackage.devDependencies;
delete mainPackage.scripts;

const PUBLIC_PACKAGE = path.join(__dirname, 'lib/package.json');
fs.writeFileSync(PUBLIC_PACKAGE, JSON.stringify(mainPackage, null, 2));
