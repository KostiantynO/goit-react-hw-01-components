import styled from 'styled-components';

export const ProfileStyled = styled.div`
  width: 320px;
  margin: 1% auto 1%;

  background-color: #fff;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 1px #cdd7e4;
`;

export const DescriptionStyled = styled.div`
  padding: ${props => props.theme.spacing(10, 4)};
  text-align: center;
`;

const placeholderImg =
  'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

const setAttr = props => ({ src: props.avatar || placeholderImg });

export const Avatar = styled.img.attrs(setAttr)`
  display: block;

  width: 64%;
  height: auto;
  margin: 0 auto 32px;

  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 12px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #122236;
`;

export const TagName = styled.p`
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #768696;
`;

export const Location = styled.p`
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #768696;
`;

export const ProfileStats = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding: 0;
  margin: 0;

  font-size: 1.1rem;

  list-style: none;
  border-top: 1px solid #e4e9f0;
`;

export const ProfileStatsLabel = styled.span`
  font-size: 1.1rem;
  color: #768696;
`;

export const StatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: ${props => props.theme.spacing(6, 5)};

  background-color: #f3f6f9;
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
  color: #25384d;
  font-weight: 700;
`;
