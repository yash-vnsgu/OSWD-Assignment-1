const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipFile(sourceFolder, zipFilePath) {
  const output = fs.createWriteStream(zipFilePath);
  const archive = archiver('zip', {
    zlib: { level: 9 } 
  });

  output.on('close', () => {
    console.log(`✅ ZIP file created: ${zipFilePath} (${archive.pointer()} total bytes)`);
  });

  archive.on('warning', err => {
    if (err.code === 'ENOENT') {
      console.warn('⚠️ Warning:', err.message);
    } else {
      throw err;
    }
  });

  archive.on('error', err => {
    throw err;
  });

 
  archive.pipe(output);

  archive.directory(sourceFolder, false);

  archive.finalize();
}

const folderToZip = path.join(__dirname, 'Folder'); 
const outputZipFile = path.join(__dirname, 'output.zip');

zipFile(folderToZip, outputZipFile);
