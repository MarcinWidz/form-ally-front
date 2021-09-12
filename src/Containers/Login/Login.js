import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Cookies from "js-cookie";

function Login({
  setPasswordInput,
  passwordInput,
  setLogged,
  setConnectButton,
  setUserId,
  userId,
  password,
  setPassword,
}) {
  let history = useHistory();

  const handlePasswordChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setPasswordInput(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://form-ally.herokuapp.com/account/login"
      );
      console.log("response:", response.data);
      console.log("userId:", userId);
      setPassword(response.data[0].password);
      setUserId(response.data[0]._id);
      Cookies.set("password", response.data[0].password);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("Cookie:", Cookies.get("password"));
  if (password === passwordInput) {
    console.log("paswordInput: ", passwordInput);
    console.log("pasword: ", password);
    setLogged(true);
    history.push("/backoffice");
    setConnectButton("Déconnexion");
  }
  return (
    <div className='login-container'>
      <div>
        <h1>Accedér à mon espace Admin</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            className='login-input'
            onChange={handlePasswordChange}
            type='password'
          />
          <input className='login-button' type='submit' />
        </form>
      </div>
    </div>
  );
}

export default Login;
