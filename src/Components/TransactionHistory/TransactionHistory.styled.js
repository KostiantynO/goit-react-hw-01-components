import styled from 'styled-components';

export const Transactions = styled.table`
  max-width: 320px;
  margin: 0 auto 2%;
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  text-align: center;
`;

export const TableHeading = styled.th`
  padding: 12px 20px;
  background-color: lightseagreen;
  color: #fff;
`;

export const TransactionRow = styled.tr`
  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    transform: scale(1.03);
  }

  :nth-child(even) {
    background-color: #ecf1f4;
  }

  :nth-child(odd) {
    background-color: #fff;
  }
`;

export const TransactionData = styled.td`
  padding: 10px;

  :first-of-type {
    padding-left: 12px;
    text-align: left;
    text-transform: capitalize;
  }

  :nth-of-type(2) {
    text-align: right;
    padding-right: 24px;
  }
`;
