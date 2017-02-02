import express from 'express';
import mongoose from 'mongoose';
require('./api/data/db.js');
import routes from './api/routes/index.js';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();

app.set('port', 3000);


app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.get("*",function(req,res){
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
