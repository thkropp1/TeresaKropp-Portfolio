
var express = require('express');

var app = express();

app.use(express.static('.'));

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});

