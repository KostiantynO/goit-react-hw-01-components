import "modern-normalize/modern-normalize.css";
import "../Common/Common.module.css";
import Profile from "../Components/Task-1/Profile/Profile";
import Statistics from "../Components/Task-2/Statistics/Statistics";
import FriendList from "../Components/Task-3/FriendList/FriendList";
import TransactionHistory from "../Components/Task-4/TransactionHistory/TransactionHistory";
import user from "../Components/Task-1/user";
import data from "../Components/Task-2/data";
import friends from "../Components/Task-3/friends";
import transactions from "../Components/Task-4/transactions";

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
