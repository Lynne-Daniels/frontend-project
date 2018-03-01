import React from 'react';
import TweetList from './TweetList.jsx';
const data = require('./sample-data.js');

class TweetListContainer extends React.Component{
  //TODO - after figuring out a server to make the api call, initialize with empty strings
  // and setState with data from api call on componentDidMount
  constructor(props) {
    super(props);

    this.state = {tweets: []}
  }
  componentDidMount(){
    this.setState({tweets:data})
  }
  render(){
    return (<div>
      <TweetList tweets = {this.state.tweets} />
    </div>)
  }
}

export default TweetListContainer;