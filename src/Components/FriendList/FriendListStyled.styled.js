import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;

  width: 320px;
  padding: 0;
  margin: 0 auto 2%;

  list-style: none;
  border-radius: 4px;
`;

export const FriendListItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: ${props => props.theme.spacing(2)};

  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #a5a5a5;
  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    transform: scale(1.03);
  }
`;

export const IsOnlineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline, theme }) =>
    theme.colors[isOnline ? 'green' : 'red']};
`;

export const FriendName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AvatarImg = styled.img`
  display: block;
  width: 48px;
  height: auto;
`;
