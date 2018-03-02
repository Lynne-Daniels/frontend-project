import React from 'react';
import Tweet from './Tweet.jsx';
import { Media } from 'react-bootstrap';

class TweetList extends React.Component{

  render(){
    const tweetList = this.props.tweets.map((tweet, index) => {
      return <Tweet key = {index} tweet = {tweet}/>
    })
    console.log(Object.entries(this.props))
    return (
      <div>
      <h4>Last week {this.props.tweeter}  said...</h4> {/* make this populate automagically */}
      <ul className = "list-unstyled" >
       {tweetList}
      </ul>
    </div>)
  }
};

export default TweetList
