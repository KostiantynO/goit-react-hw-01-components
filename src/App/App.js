import 'modern-normalize/modern-normalize.css';
import '../Common/Common.module.css';

// prettier-ignore
import { Profile, Statistics, FriendList, TransactionHistory} from '../Components';
import { user, data, friends, transactions } from '../json';

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
