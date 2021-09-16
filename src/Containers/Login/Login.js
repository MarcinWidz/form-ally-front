import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [alert, setAlert] = useState();

  const notify = () => {
    toast.error(
      'Mot de passe Invalide. Dans le but de la demonstration composez le mot de passe "admin"',
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
      }
    );
  };

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
      if (response.data[0].password === passwordInput) {
        setPassword(response.data[0].password);
        setUserId(response.data[0]._id);
        history.push("/backoffice");
        setConnectButton("Déconnexion");
        Cookies.set("password", response.data[0].password);
        setLogged(true);
        console.log("Cookie:", Cookies.get("password"));
      } else {
        notify();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
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
    </div>
  );
}

export default Login;
