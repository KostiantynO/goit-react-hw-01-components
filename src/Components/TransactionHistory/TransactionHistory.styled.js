import styled from 'styled-components';

export const Transactions = styled.table`
  max-width: 320px;
  margin: ${props => props.theme.spacing(0, 'auto', '2%')};
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  text-align: center;
`;

export const TableHeading = styled.th`
  padding: ${props => props.theme.spacing(3, 5)};
  background-color: ${props => props.theme.colors.lightSeaGreen};
  color: ${props => props.theme.colors.white};
`;

export const TransactionRow = styled.tr`
  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    transform: scale(1.03);
  }

  :nth-child(even) {
    background-color: ${props => props.theme.colors.grey};
  }

  :nth-child(odd) {
    background-color: ${props => props.theme.colors.white};
  }
`;

export const TransactionData = styled.td`
  padding: ${props => props.theme.spacing(3)};

  :first-of-type {
    padding-left: ${props => props.theme.spacing(3)};
    text-align: left;
    text-transform: capitalize;
  }

  :nth-of-type(2) {
    text-align: right;
    padding-right: ${props => props.theme.spacing(6)};
  }
`;
