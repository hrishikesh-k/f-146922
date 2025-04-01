const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '../src/_redirects');
const destinationDir = path.join(__dirname, '../dist/portfolio');
const destination = path.join(destinationDir, '_redirects');

if (fs.existsSync(source)) {
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }
  fs.copyFileSync(source, destination);
}