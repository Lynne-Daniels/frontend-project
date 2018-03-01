import React from 'react';
import Tweet from './Tweet.jsx';

class TweetList extends React.Component{

  render(){
    const tweetList = this.props.tweets.map((tweet, index) => {
      return <Tweet key = {index} tweet = {tweet}/>
    })
    return (<div>
      {tweetList}
    </div>)
  }
};

export default TweetList
