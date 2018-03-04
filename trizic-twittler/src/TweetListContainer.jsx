import React from 'react';
import TweetList from './TweetList.jsx';
//const data = require('./sample-data.js'); // used for static test data only


class TweetListContainer extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      trizic: [],
      laughingsquid: [],
      techcrunch: []
    };
    this.getTweets = this.getTweets.bind(this);
  }
  getTweets (twitterAccount) {
    let url = `http://localhost:3002/tweets?id=${twitterAccount}`
    console.log(url);
    fetch(url) // was 'http://localhost:3002/tweets?id=laughingsquid'
    .then((response) => {
      //console.log('in herer now ', response, JSON.parse(response));
      //console.log(response.json());
      return(response.json());
    })
    .then((myJson) => {
      //console.log('Here is what I have: ', myJson)
      this.setState({[twitterAccount]: myJson})
    })  
    .catch((error) => {
      console.log('Here is a fetching error: ', error)
    })
  }

  componentDidMount(){

    const twitterAccounts = Object.keys(this.state);
    console.log('twitter accouts are: ', twitterAccounts)
    for (let i = 0; i < twitterAccounts.length; i++) {
      console.log('handle is: ', twitterAccounts[i])
      this.getTweets(twitterAccounts[i]);
    }
  }
  render(){

    const tweetListWithHeader = Object.entries(this.state).map(([key, val], index) => {
       return ( 
       <div className="col-sm" key={index}>
          <TweetList tweets = {this.state[key]} tweeter = {key} />
        </div>
        )
    });
    return (
    <div className="container-fluid">
      <div className="row">
        {tweetListWithHeader}
      </div>
    </div>)
  }
}

export default TweetListContainer;