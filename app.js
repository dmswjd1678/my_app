var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res){
    res.send('welcome to node blog!');
});

app.get('/index', function(req, res){
    fs.readFile('./index.html', function(err, html){
        if(err){
            throw err;
        }
        res.write(html);
        res.end();
    });
});

app.listen(3000, function(){
    console.log('Server On!');
});