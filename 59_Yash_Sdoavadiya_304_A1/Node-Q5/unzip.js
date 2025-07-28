const fs = require('fs');
const zlib = require('zlib');
const path = require('path');


const gzipPath = path.join(__dirname, 'file.txt.gz');
const outputPath = path.join(__dirname, 'file.txt');


const input = fs.createReadStream(gzipPath);
const output = fs.createWriteStream(outputPath);


input.pipe(zlib.createGunzip()).pipe(output);

output.on('close', () => {
  console.log(`✅ Extracted to ${outputPath}`);
});
