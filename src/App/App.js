import "modern-normalize/modern-normalize.css";
import "../Common/Common.module.css";
import Profile from "../Components/Task-1/Profile/Profile";
import user from "../Components/Task-1/user";

const pages = [1, 2, 3, 4];

function App() {
  return <Profile user={user} />;
}

export default App;
// <ul>
//   {pages.map(page => (
//     <li key={page}>Task {page}</li>
//   ))}
// </ul>
