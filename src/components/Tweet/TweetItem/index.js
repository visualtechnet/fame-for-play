import React from 'react';
import PropTypes from 'prop-types'
import TweetProfile from './TweetProfile'
import TweetContent from './TweetContent'
import { TweetContainer } from './style'

const TweetItem = ({ item }) => {
    const { user, ...tweetcore } = item

    return (
        <TweetContainer>
            <TweetProfile profile={user}></TweetProfile>
            <TweetContent content={tweetcore}></TweetContent>
        </TweetContainer>
    );
};

TweetItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default TweetItem;