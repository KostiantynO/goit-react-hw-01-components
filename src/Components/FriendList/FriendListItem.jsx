import PropTypes from 'prop-types';

import FriendListItemStyled from './FriendListItemStyled.styled';
import IsOnlineIndicator from './IsOnlineIndicator.styled';
import AvatarImg from './AvatarImg.styled';
import FriendName from './FriendName.styled';

const FriendListItem = ({ name, avatar, id, isOnline }) => {
  return (
    id && (
      <FriendListItemStyled key={id}>
        <IsOnlineIndicator isOnline={isOnline} />
        <AvatarImg src={avatar} alt={name} />
        {name && <FriendName>{name}</FriendName>}
      </FriendListItemStyled>
    )
  );
};

FriendListItem.defaultProp = {
  id: 0,
  name: 'not-found',
  avatar: 'not-found',
  isOnline: false,
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
