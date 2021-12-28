import PropTypes from "prop-types";
import css from "./FriendList.module.css";

const FriendListItem = ({ name, avatar, id, isOnline }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={css.status}
        style={{ backgroundColor: !isOnline ? "red" : "green" }}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width="48"
        height="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => (
  <ul className={css.friendList}> {friends.map(FriendListItem)} </ul>
);

export default FriendList;
