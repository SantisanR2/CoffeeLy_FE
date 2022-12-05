const path = require('path');
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/regisCafe'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/regisCafe/index.html'));
});

// default Heroku port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});