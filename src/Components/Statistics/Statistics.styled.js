import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  width: 320px;
  margin: ${props => props.theme.spacing(0, 'auto', '2%')};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 4px 4px 12px 12px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding: ${props => props.theme.spacing(5)};
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const StatListStyled = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0 0 12px 12px;
`;

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  width: calc(100% / 5);
  padding: ${props => props.theme.spacing(3)};

  color: ${props => props.theme.colors.white};
  background-color: ${randomBgColor};
  box-shadow: 1px 1px 2px 1px ${props => props.theme.colors.grey};

  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    transform: scale(1.03);
  }

  :first-of-type {
    border-bottom-left-radius: 12px;
  }

  :last-of-type {
    border-bottom-right-radius: 12px;
  }
`;

export const StatItemLabel = styled.span`
  font-size: 0.9rem;
`;

export const StatItemPercentage = styled.span`
  font-size: 1.4rem;
`;
