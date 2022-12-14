import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
