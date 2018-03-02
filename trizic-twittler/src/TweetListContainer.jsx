import React from 'react';
import TweetList from './TweetList.jsx';
import { Media } from 'react-bootstrap';
const data = require('./sample-data.js');

class TweetListContainer extends React.Component{
  //TODO - after figuring out a server to make the api call, initialize with empty strings
  // and setState with data from api call on componentDidMount
  constructor(props) {
    super(props);

    this.state = {
      trizic: [],
      laughingsquid: [],
      techcrunch: []
    }
  }
  componentDidMount(){
    this.setState({
      trizic: data.trizic,
      laughingsquid: data.laughingsquid,
      techcrunch: data.techcrunch
    })
  }
  render(){
    console.log(Object.entries(this.state).map(([key, val]) => {
      return key
    }));
    const tweetListWithHeader = Object.entries(this.state).map(([key, val]) => {
       return ( 
       <div className="col-sm">
          {/* <TweetList laughingsquid = {this.state.laughingsquid} /> */}
          {console.log('key is: ', key, this.state[key])}
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