import { ProfileStatListStyled } from './Profile.styled';
import ProfileStatsItem from './ProfileStatsItem';

export const ProfileStats = ({ stats }) => {
  return (
    <ProfileStatListStyled>
      {Object.entries(stats).map(ProfileStatsItem)}
    </ProfileStatListStyled>
  );
};
