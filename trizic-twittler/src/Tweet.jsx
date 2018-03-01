import React from 'react';

class Tweet extends React.Component{
    render() {
        return(
            <div>
                <p>{this.props.tweet.text}</p>
                <p>{this.props.tweet.formattedDate}</p>
                <p>{this.props.tweet.link}</p>
            
            </div>
        )
    }
}

export default Tweet;