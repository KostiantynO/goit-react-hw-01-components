import PropTypes from 'prop-types';

import {
  ProfileStyled,
  DescriptionStyled,
  Avatar,
  UserName,
  TagName,
  Location,
  ProfileStats,
} from './Profile.styled';

import ProfileStatsItem from './ProfileStatsItem';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <Avatar avatar={avatar} alt={username} />
        {username && <UserName>{username}</UserName>}
        {tag && <TagName>&#64;{tag}</TagName>}
        {location && <Location>{location}</Location>}
      </DescriptionStyled>

      {stats && (
        <ProfileStats>
          {Object.entries(stats).map(ProfileStatsItem)}
        </ProfileStats>
      )}
    </ProfileStyled>
  );
};

Profile.defaultProps = {
  user: {
    username: 'not-found',
    tag: 'not-found',
    location: 'not-found',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',

    stats: {
      followers: 0,
      views: 0,
      likes: 0,
    },
  },
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,

    stats: PropTypes.objectOf(PropTypes.number),
  }),
};
