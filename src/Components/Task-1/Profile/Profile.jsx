import css from "./Profile.module.css";
console.log("css", css);

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={
            !avatar?.includes("https://")
              ? "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              : avatar
          }
          alt={username}
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>&#64;{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__item}>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
