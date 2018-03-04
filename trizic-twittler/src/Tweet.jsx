import React from 'react';
import twitterLogo from './Twitter_Logo_Blue.svg';


class Tweet extends React.Component{
    render() {
        return(
            <a href={this.props.tweet.link}>
              <li className = "media my-4">
              <div className="media-left">
                <img className="align-self-start mr-3 media-object" src={twitterLogo} alt="Generic placeholder"/>
                </div>
                <div className = "media-body">
                  <h6>{this.props.tweet.formattedDate}</h6>
                  <h6 className = "mt-0 mb-1">{this.props.tweet.text}</h6>
                </div>
              </li>
            </a>
        )
    }
}

export default Tweet;