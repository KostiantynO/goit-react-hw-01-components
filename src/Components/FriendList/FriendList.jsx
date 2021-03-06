import { PropTypes } from '../../modules/common/components';
import { FriendListStyled } from './FriendListStyled.styled';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends = [{}] }) => {
  return <FriendListStyled> {friends.map(FriendListItem)} </FriendListStyled>;
};

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };
