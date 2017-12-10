const express = require('express');
const app = express();
var cookieParser= require('cookie-parser');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', function (req, res){
 res.send('Hello World- Akanksha');
});

app.use('/setcookie', function (req, res,next){

var cookie1 = req.cookies.name;
var cookie2 = req.cookies.age;
  if ((cookie1 === undefined) && (cookie2 === undefined))
  {
    
    res.cookie('name','Akanksha');
    res.cookie('age','20');
    console.log('cookie created successfully');
    res.send('cookie created successfully');
  } 
  else
  {
    console.log('cookie exists', req.cookies);
    res.send('cookie exists');
  } 
  next(); 
});


app.get('/html', function (req, res){
 res.sendFile(path.join(__dirname, 'public','file.html'));
});

app.get('/image', function (req, res){
 res.sendFile(path.join(__dirname, 'public','img.jpg'));
});

app.get('/input', function (req, res){
 res.sendFile(path.join(__dirname, 'public','inputform.html'));
});

app.post('/sentdata', function (req, res){
 var whatisent = req.body.name;	
 res.send('The data entered is logged onto the console');
 console.log('The data entered is: '+ whatisent);
});

app.use('/getcookies', function (req, res,next){

var cookie1 = req.cookies.name;
var cookie2 = req.cookies.age;
  if ((cookie1 === undefined) && (cookie2 === undefined))
  {
    res.send('No cookies set');
  } 
  else
  {
    console.log('cookie exists', req.cookies);
    res.send('cookies set: ' + req.headers.cookie);
  } 
  next(); 
});

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000,function (){
console.log('App is listening on port 3000!');
});