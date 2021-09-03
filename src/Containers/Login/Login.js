import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

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
      const response = await axios.get("http://localhost:3000/account/login");
      console.log("response:", response.data);
      console.log("userId:", userId);
      setPassword(response.data[0].password);
      setUserId(response.data[0]._id);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (password === passwordInput) {
    console.log("paswordInput: ", passwordInput);
    console.log("pasword: ", password);
    setLogged(true);
    history.push("/backoffice");
    setConnectButton("Déconnexion");
  }
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
