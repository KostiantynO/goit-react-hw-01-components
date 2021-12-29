import PropTypes from 'prop-types';
import css from './Profile.module.css';
import ProfileStatsItem from './StatsItem';

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
        {username && <p className={css.name}>{username}</p>}
        {tag && <p className={css.tag}>&#64;{tag}</p>}
        {location && <p className={css.location}>{location}</p>}
      </div>
      {stats && (
        <ul className={css.stats}>
          {Object.entries(stats).map(ProfileStatsItem)}
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

    stats: PropTypes.objectOf(PropTypes.number),
  }),
};

export default Profile;
