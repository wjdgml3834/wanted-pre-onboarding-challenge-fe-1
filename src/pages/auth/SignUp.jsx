import { useCallback, useState } from "react";
import axios from "axios";

function SignUp() {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });

  //오류메시지 상태 검사
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserInputs({
        ...userInputs,
        [name]: value,
      });
      if (name === "email") {
        const emailRegex =
          /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(value)) {
          setEmailMessage("이메일 형식이 틀렸습니다.");
          setIsEmail(false);
        } else {
          setEmailMessage("올바른 형식입니다.");
          setIsEmail(true);
        }
      } else if (name === "password") {
        const passwordRegex =
          /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegex.test(value)) {
          setPasswordMessage(
            "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
          );
          setIsPassword(false);
        } else {
          setPasswordMessage("안전한 비밀번호입니다.");
          setIsPassword(true);
        }
      }
    },
    [userInputs]
  );

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/create", {
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
      {userInputs.email.length > 0 && <span>{emailMessage}</span>}
      <input
        name="password"
        type="password"
        onChange={handleInput}
        placeholder="비밀번호를 입력해주세요"
      />{" "}
      {userInputs.password.length > 0 && <span>{passwordMessage}</span>}
      <button
        type="submit"
        onClick={createUser}
        disabled={!(isEmail && isPassword)}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUp;
