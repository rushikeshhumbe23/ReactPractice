import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { user, isAuthenticated} = useAuth0();
  console.log(user);
  return (
    <div className="App">
      {isAuthenticated ? `${user.nickname}` : "Plese Login"}
      <h1>Rushikes Humbe</h1>

      <LogoutButton />
      <LoginButton />
    </div>
  );
}

export default App;
