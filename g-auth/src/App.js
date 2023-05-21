import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
function App() {
  const { user, isAuthenticated } = useAuth0();
  const { name, lacale, nickname, picture } = user;
  return (
    <div className="App">
      <div>
        {/* <img src={`${picture}`} /> */}
        <div
          style={{
            padding: "5px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "500",
          }}
        >
          {isAuthenticated ? `${user.nickname}` : ""}
        </div>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
}

export default App;

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
`;
