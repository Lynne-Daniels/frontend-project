const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tweets = require('./get-tweets.js');
const moment = require('moment')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Express Server is Listening')
});

// Test with $ curl  -H "Content-Type: application/json" -d "{\"id\":\"laughingsquid\"}" http://localhost:3002/tweets
app.get('/tweets', cors(), (req, res)=> {
  res.setHeader('Content-Type', 'application/json');
  console.log('POST request received');
  if (req.query.id) {
    console.log('herrrrreeeee: ', req.query.id)
    tweets(req.query.id, (err, result) => {
      if (err) {console.log(err);}
      if (result.statuses.length === 0) {
        // console.log('output was 0')
        // return `This account had no tweets in the last week.`
        var output = [{
          text: 'No Tweets found.  Silence.  Nothing.',
          formattedDate: moment().format('LLLL'),
          link: `https://twitter.com/`
        }];
        console.log(output);
      } else {
        // console.log('output was not zero')
        var output = result.statuses.map((val) =>{
            return {
              text: val.text,
              formattedDate: moment(new Date(val.created_at)).format('LLLL'),
              //TODO refactor to take a variable for screen name
              link: `https://twitter.com/${'anyoldstringwillworkitseems'}/status/${val.id_str}`
            }
          })
          console.log(output);
        }
      //console.log(JSON.stringify(result));
      //let output = 7;
      console.log(result.statuses.length, output);
      res.end(JSON.stringify(output));
        })

  } else console.log('where is id???', req)
})

app.get('/test', function(req, res) {
  res.send('alrighty then')
})
 
app.listen(3002);
console.log('🐬🐬🐬listening on 3002🐬🐬🐬')