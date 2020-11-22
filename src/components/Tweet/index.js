import React from 'react';
import PropTypes from 'prop-types'
import TweetItem from './TweetItem'
import { TweetWrapper, TweetContainer } from './style'

const Tweet = ({ tweets }) => {        
    return (
        <TweetContainer>
            <TweetWrapper>
                {
                    tweets.map((tweet) => (
                        <TweetItem item={tweet}></TweetItem>
                    ))                        
                }
            </TweetWrapper>
        </TweetContainer>
    );
};

Tweet.propTypes = {
    tweets: PropTypes.array.isRequired
}

export default Tweet;