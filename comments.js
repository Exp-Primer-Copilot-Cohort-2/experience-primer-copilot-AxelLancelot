// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});