function SignUp() {
  return (
    <form>
      <label for="email">이메일</label>
      <input type="email" id="email" />
      <label for="password">비밀번호</label>
      <input type="password" id="password" />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUp;
