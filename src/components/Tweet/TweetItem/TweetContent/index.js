import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import { ContentSection, TweetText, TweetTextContent, TweetContentFooter } from './style'

const TweetContent = ({ content }) => {
    const { text, created_at } = content
    const createdAt = moment(created_at).format('MM-DD-YYYY h:mm A z') 
    
    return (
        <ContentSection>
            <TweetTextContent>
                <TweetText>{text}</TweetText>
            </TweetTextContent>
            <TweetContentFooter>{createdAt}</TweetContentFooter>
        </ContentSection>
    );
};

TweetContent.propTypes = {
    content: PropTypes.shape().isRequired
}

export default TweetContent;