var express = require('express');
var path = require('path');

var port = 3030;
var app = express();
var env = app.get('env') || 'development';

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
    res.render('index');
});

// development only
// if (env == 'development') {
//   app.use(express.errorHandler());
// }

app.listen(port);

console.log('listening on port: 3030');