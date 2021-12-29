import css from './Profile.module.css';

const ProfileStatsItem = ([key, val]) => {
  return (
    <li key={key} className={css.stats__item}>
      <span className={css.label}>{key}</span>
      {val && <span className={css.quantity}>{val}</span>}
    </li>
  );
};

export default ProfileStatsItem;
