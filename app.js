var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//use middleware

app.use(bodyParser());

var todoItems = [
    { id: 1, desc: 'Simanta' },
    { id: 1, desc: 'Ajit' },
    { id: 1, desc: 'Amit' }
];

//define routes
app.get('/', function (req, res) {
    // res.send('hello express!');
    res.render('index', {
        title: 'My Title',
        items: todoItems
    });
});
aap.post('/add', function (req, res) {
    var newitem = req.body.newitem;
    todoItems.push({
        id: todoItems.length + 1,
        desc: newitem
    });
    res.redirect('/');
});



app.listen(1337, function () {
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