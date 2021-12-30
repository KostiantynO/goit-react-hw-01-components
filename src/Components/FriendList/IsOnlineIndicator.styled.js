import styled from 'styled-components';

const IsOnlineIndicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => `${!isOnline ? 'red' : 'green'}}`};
`;

export default IsOnlineIndicator;
