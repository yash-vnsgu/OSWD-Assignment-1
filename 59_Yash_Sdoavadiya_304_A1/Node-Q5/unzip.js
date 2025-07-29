const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const gzipPath = path.join(__dirname, 'file.txt.gz');
const outputPath = path.join(__dirname, 'file.txt');

const input = fs.createReadStream(gzipPath);
const output = fs.createWriteStream(outputPath);
const gunzip = zlib.createGunzip();

input.on('error', (err) => {
  console.error('❌ Read stream error:', err.message);
});
gunzip.on('error', (err) => {
  console.log(`✅ Extracted to ${outputPath}`);
});
output.on('error', (err) => {
  console.error('❌ Write stream error:', err.message);
});
output.on('close', () => {
  console.log(`✅ Extracted to ${outputPath}`);
});

input.pipe(gunzip).pipe(output);
