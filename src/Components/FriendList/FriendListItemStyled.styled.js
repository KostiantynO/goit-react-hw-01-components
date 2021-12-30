import styled from 'styled-components';

const FriendListItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 8px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #a5a5a5;
  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    transform: scale(1.03);
  }
`;

export default FriendListItemStyled;
