import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={
            !avatar?.includes('https://')
              ? 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
              : avatar
          }
          alt={username}
          className={css.avatar}
          width={184}
          height={184}
        />
        {username && typeof username === 'string' && (
          <p className={css.name}>{username}</p>
        )}
        {tag && typeof tag === 'string' && (
          <p className={css.tag}>&#64;{tag}</p>
        )}
        {location && typeof location === 'string' && (
          <p className={css.location}>{location}</p>
        )}
      </div>

      {stats &&
        typeof stats === 'object' &&
        Object.keys(stats)?.length &&
        !Array.isArray(stats) && (
          <ul className={css.stats}>
            <li key="profile-followers" className={css.stats__item}>
              <span className={css.label}>Followers </span>
              {typeof stats.followers === 'number' && stats.followers > 0 && (
                <span className={css.quantity}>{stats.followers}</span>
              )}
            </li>

            <li key="profile-views" className={css.stats__item}>
              <span className={css.label}>Views </span>
              {typeof stats.views === 'number' && stats.views > 0 && (
                <span className={css.quantity}>{stats.views}</span>
              )}
            </li>

            <li key="profile-likes" className={css.stats__item}>
              <span className={css.label}>Likes </span>
              {typeof stats.likes === 'number' && stats.likes > 0 && (
                <span className={css.quantity}>{stats.likes}</span>
              )}
            </li>
          </ul>
        )}
    </div>
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

    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;
