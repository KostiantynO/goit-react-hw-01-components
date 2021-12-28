import "modern-normalize/modern-normalize.css";
import "../Common/Common.module.css";
import Profile from "../Components/Task-1/Profile/Profile";
import Statistics from "../Components/Task-2/Statistics/Statistics";
import user from "../Components/Task-1/user";
import data from "../Components/Task-2/data";

const pages = [1, 2, 3, 4];

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
}

export default App;
// <ul>
//   {pages.map(page => (
//     <li key={page}>Task {page}</li>
//   ))}
// </ul>
