import { useHistory } from "react-router-dom";
import "./Login.css";

function Login({
  setPasswordInput,
  passwordInput,
  setLogged,
  setConnectButton,
}) {
  const password = "admin";

  let history = useHistory();

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPasswordInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passwordInput) {
      setLogged(true);
      history.push("/backoffice");
      setConnectButton("Déconnexion");
    }
  };
  return (
    <div>
      <h1>Accedér à mon espace Admin</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input onChange={handlePasswordChange} type='text' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Login;
