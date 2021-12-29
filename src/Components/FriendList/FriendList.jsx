import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return <ul className={css.friendList}> {friends.map(FriendListItem)} </ul>;
};

FriendList.defaultProps = { friends: [{}] };

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };

export default FriendList;
