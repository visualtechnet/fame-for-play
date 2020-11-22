import React from 'react';
import PropTypes from 'prop-types'
import { ProfileSection, ProfileImage, ProfileName, ProfileDesc } from './style'

const TweetProfile = ({ profile }) => {
    const { name, screen_name, description, followers_count, 
        friends_count, profile_background_image_url,
        profile_image_url
    } = profile 

    return (
        <ProfileSection>
            <ProfileImage src={profile_image_url} />
            <ProfileName>{screen_name}</ProfileName>
            <ProfileDesc>{description}</ProfileDesc>
        </ProfileSection>
    );
};

TweetProfile.propTypes = {
    profile: PropTypes.shape().isRequired
}

export default TweetProfile;