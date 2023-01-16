import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(" ");
  const [senha, setSenha] = useState(" ");

  return (
    <form>
      User:
      <input type="text" onChange={(e) => setUser(e.target.value)} /> <br />
      Senha:
      <input type="password" onChange={(e) => setSenha(e.target.value)} />{" "}
      <br />
      <button type="button" onClick={() => console.log(user, senha)}>
        {" "}
        LOGIN{" "}
      </button>
    </form>
  );
};

export default Login;
