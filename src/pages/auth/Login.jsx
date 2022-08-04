function Login() {
  return (
    <form>
      <label for="email">이메일</label>
      <input type="email" id="email" />
      <label for="password">비밀번호</label>
      <input type="password" id="password" />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
