import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
`;
