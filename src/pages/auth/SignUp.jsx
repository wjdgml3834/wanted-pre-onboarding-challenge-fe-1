import { useCallback, useState } from "react";

function SignUp() {
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
  return (
    <form>
      <input
        name="email"
        type="email"
        id="email"
        onChange={handleInput}
        placeholder="이메일을 입력해주세요"
      />
      <input
        name="password"
        type="password"
        id="password"
        onChange={handleInput}
        placeholder="비밀번호를 입력해주세요"
      />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUp;
