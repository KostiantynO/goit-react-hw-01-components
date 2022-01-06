import { Profile, Statistics, FriendList, TransactionHistory } from '..';
import { user, data, friends, transactions } from '../../json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
