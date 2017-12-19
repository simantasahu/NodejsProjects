var express = require('express');
var path = require('path');

var app = express();

//configure app

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));



//use middleware
//define routes
app.get('/',function(req, res){
    // res.send('hello express!');
    res.render('index');
});

app.listen(1337,function(){
    console.log('ready on port 1337');
});





// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });