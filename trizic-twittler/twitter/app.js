const express = require('express');
const app = express();
const tweets = require('./get-tweets.js');
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/tweets/:twitterHandle',  function (req, res){
  tweets('twitterHandle: ', twitterHandle, (error, tweets, response) =>{
    if (error) {
      console.log('error getting tweets: ', error);
    }
    console.log(tweets);
  })
  res.send('tweets go here')
})
 
app.listen(3002)