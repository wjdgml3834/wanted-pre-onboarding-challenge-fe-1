import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SignUp />
    </div>
  );
}

export default App;
