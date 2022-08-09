import { useCallback, useState } from "react";
import axios from "axios";

function Login() {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserInputs({
        ...userInputs,
        [name]: value,
      });
    },
    [userInputs]
  );
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        email: userInputs.email,
        password: userInputs.password,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <input
        name="email"
        type="email"
        onChange={handleInput}
        placeholder="이메일을 입력해주세요"
      />
      <input
        name="password"
        type="password"
        onChange={handleInput}
        placeholder="비밀번호를 입력해주세요"
      />
      <button type="submit" onClick={loginUser}>
        로그인
      </button>
    </form>
  );
}

export default Login;
