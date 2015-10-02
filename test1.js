var express = require('express');

var app = express();

app.get('/',function (req, res) {
  res.send('hello world~~~<br> This is Node Server');
});

app.listen(3000, function() {
  console.log('Server On');
});
