import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import FriendsListStyled from './FriendsListStyled.styled';

const FriendList = ({ friends }) => {
  return <FriendsListStyled> {friends.map(FriendListItem)} </FriendsListStyled>;
};

FriendList.defaultProps = { friends: [{}] };

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };

export default FriendList;
