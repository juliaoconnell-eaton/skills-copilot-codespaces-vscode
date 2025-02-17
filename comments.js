// Create web server
const express = require('express');
const app = express();

// Import the comments module
const comments = require('./comments.js');

// Use the comments module
app.use('/comments', comments);

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});