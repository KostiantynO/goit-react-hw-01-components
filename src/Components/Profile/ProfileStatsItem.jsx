import { ProfileStatsLabel, StatsItem, Quantity } from './Profile.styled';

const ProfileStatsItem = ([key, val]) => {
  return (
    <StatsItem key={key}>
      <ProfileStatsLabel>{key}</ProfileStatsLabel>
      {val ? <Quantity>{val}</Quantity> : ''}
    </StatsItem>
  );
};

export default ProfileStatsItem;
