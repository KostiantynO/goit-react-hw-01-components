import PropTypes from 'prop-types';

import {
  AvatarImg,
  FriendListItemStyled,
  FriendName,
  IsOnlineIndicator,
} from './FriendListStyled.styled';

const FriendListItem = ({
  id = 0,
  name = 'not-found',
  avatar = 'not-found',
  isOnline = false,
}) => {
  return id ? (
    <FriendListItemStyled key={id}>
      <IsOnlineIndicator isOnline={isOnline} />
      <AvatarImg src={avatar} alt={name} />
      {name ? <FriendName>{name}</FriendName> : ''}
    </FriendListItemStyled>
  ) : (
    ''
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
