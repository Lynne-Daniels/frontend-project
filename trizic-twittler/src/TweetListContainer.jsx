import React from 'react';
import TweetList from './TweetList.jsx';

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
    fetch(url)
    .then((response) => {
      return(response.json());
    })
    .then((myJson) => {
      this.setState({[twitterAccount]: myJson})
    })  
    .catch((error) => {
      console.log('Here is a fetching error: ', error)
    })
  }

  componentDidMount(){

    const twitterAccounts = Object.keys(this.state);
    for (let i = 0; i < twitterAccounts.length; i++) {
      this.getTweets(twitterAccounts[i]);
    }
  }
  render(){

    const tweetListWithHeader = Object.entries(this.state).map(([key, val], index) => {
       return ( 
       <div className="col col-sm- col-sm-4" key={index}>
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