import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ name, avatar, id, isOnline }) => {
  return (
    id && (
      <li key={id} className={css.item}>
        <span
          className={css.status}
          style={{ backgroundColor: !isOnline ? 'red' : 'green' }}
        ></span>
        <img
          className={css.avatar}
          src={avatar}
          alt={name}
          width="48"
          height="48"
        />
        {name && <p className={css.name}>{name}</p>}
      </li>
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
