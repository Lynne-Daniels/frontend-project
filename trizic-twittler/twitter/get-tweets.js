const Twitter = require('Twitter');
const TWITTER_CREDENTIALS = require('./config.js');

const client = new Twitter({
  consumer_key: TWITTER_CREDENTIALS.consumer_key,
  consumer_secret: TWITTER_CREDENTIALS.consumer_secret,
  bearer_token: TWITTER_CREDENTIALS.bearer_token
});

// https://twitter.com/settings/widgets/new looks faster/easier and avoids sharing passwords, but requirements are to use REST API
// TODO - waiting for developer access to free premium level. Sent request 2/28  Right now, only can get tweets less than one week old.

const fetchTweets = (twitterHandle, cb) => {
  console.log('getting tweets for: ', twitterHandle);
  let url = `https://api.twitter.com/1.1/search/tweets.json?q=from%3A${twitterHandle}&count=6`;
  client.get(url, cb);
}

//  fetchTweets(twitterHandle, cb) where callback takes parameters error, tweets, server-response-code
// uncomment below to log data to console
// fetchTweets('techcrunch', (error, tweets, res) => {
//   if (error) {console.log(error);}
//   console.log(tweets);
// })
module.exports = fetchTweets;