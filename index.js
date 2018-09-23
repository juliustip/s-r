var express = require('express');
var app = express();
var feed = require('./feed');

app.set('port', (process.env.PORT || 5000));
app.get('/', feed);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
