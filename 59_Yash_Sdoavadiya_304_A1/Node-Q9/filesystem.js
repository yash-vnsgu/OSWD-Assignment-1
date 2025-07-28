const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'demo');
const filePath = path.join(folderPath, 'example.txt');

// Create a directory
fs.mkdir(folderPath, { recursive: true }, (err) => {
  if (err) return console.error('Error creating folder:', err);

  console.log('Folder created:', folderPath);

  // Write a file
  fs.writeFile(filePath, 'Hello, Node.js!', (err) => {
    if (err) return console.error('Error writing file:', err);
    console.log('File created:', filePath);

    // Append to the file
    fs.appendFile(filePath, '\nAppended text.', (err) => {
      if (err) return console.error('Error appending file:', err);
      console.log('Content appended.');

      // Read the file
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.error('Error reading file:', err);
        console.log('File content:\n', data);

        // Rename the file
        const newFilePath = path.join(folderPath, 'renamed.txt');
        fs.rename(filePath, newFilePath, (err) => {
          if (err) return console.error('Error renaming file:', err);
          console.log('File renamed.');

          // Get file stats
          fs.stat(newFilePath, (err, stats) => {
            if (err) return console.error('Error getting stats:', err);
            console.log('File stats:', stats);

            // Read directory contents
            fs.readdir(folderPath, (err, files) => {
              if (err) return console.error('Error reading folder:', err);
              console.log('Files in folder:', files);

              // Delete the file
              fs.unlink(newFilePath, (err) => {
                if (err) return console.error('Error deleting file:', err);
                console.log('File deleted.');
              });
            });
          });
        });
      });
    });
  });
});
