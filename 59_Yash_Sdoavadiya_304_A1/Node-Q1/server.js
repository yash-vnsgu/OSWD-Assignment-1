const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// GET route for "/gethello"
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
