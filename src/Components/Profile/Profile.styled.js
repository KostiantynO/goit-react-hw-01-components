import { styled } from '../../modules/common/components';

export const ProfileStyled = styled.div`
  width: 320px;
  margin: ${props => props.theme.spacing('1%', 'auto')};

  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 2px 2px 2px 1px ${props => props.theme.colors.boxShadow};
`;

export const DescriptionStyled = styled.div`
  padding: ${props => props.theme.spacing(10, 4, 3)};
  text-align: center;
`;

const placeholderImg =
  'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

const setAttr = props => ({ src: props.avatar || placeholderImg });

export const Avatar = styled.img.attrs(setAttr)`
  display: block;

  width: 64%;
  height: auto;
  margin: ${props => props.theme.spacing(0, 'auto', 8)};

  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;

export const TagName = styled.p`
  margin-bottom: ${props => props.theme.spacing(3)};
  font-size: 1.1rem;
  color: ${props => props.theme.colors.lightGrey};
`;

export const Location = styled(TagName)``;

export const ProfileStatListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  border-top: 1px solid ${props => props.theme.colors.lightLightGrey};
`;

export const ProfileStatsLabel = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.lightGrey};
`;

export const StatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  padding: ${props => props.theme.spacing(6, 5)};

  background-color: ${props => props.theme.colors.grey};
  transition: var(--time) var(--cubic) transform;

  :first-of-type {
    border-bottom-left-radius: 12px;
  }

  :last-of-type {
    border-bottom-right-radius: 12px;
  }

  :focus-within,
  :hover {
    transform: scale(1.05);
  }

  :not(:last-of-type) {
    border-right: 1px solid #e4e9f0;
  }
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
`;
