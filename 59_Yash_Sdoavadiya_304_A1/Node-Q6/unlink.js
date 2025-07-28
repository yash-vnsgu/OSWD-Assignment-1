const fs = require('fs');
const util = require('util');
const path = require('path');


const unlinkAsync = util.promisify(fs.unlink);

const filePath = path.join(__dirname, 'simple.txt');

async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log(`✅ File deleted: ${filePath}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('❌ File does not exist.');
    } else {
      console.error('❌ Error deleting file:', err.message);
    }
  }
}

deleteFile();