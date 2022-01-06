import { PropTypes } from '../../modules/common/components';

import {
  ProfileStyled,
  DescriptionStyled,
  Avatar,
  UserName,
  TagName,
  Location,
} from './Profile.styled';

import { ProfileStats } from './ProfileStats';

export const Profile = ({
  user: {
    username = 'not-found',
    tag = 'not-found',
    location = 'not-found',
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats = {
      followers: 0,
      views: 0,
      likes: 0,
    },
  },
}) => {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <Avatar avatar={avatar} alt={username} />
        {username ? <UserName>{username}</UserName> : ''}
        {tag ? <TagName>&#64;{tag}</TagName> : ''}
        {location ? <Location>{location}</Location> : ''}
      </DescriptionStyled>

      {stats ? <ProfileStats stats={stats} /> : ''}
    </ProfileStyled>
  );
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
