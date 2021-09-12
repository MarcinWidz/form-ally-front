import "./Header.css";
import logo from "../../assets/959b150456e54f3c9857dd876a41c9c9.png";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Header({ logged, setLogged, connectButton, setConnectButton }) {
  let history = useHistory();

  const handleBtn = () => {
    if (logged === true) {
      setConnectButton("Backoffice");
      setLogged(false);
      Cookies.remove("password");
      history.push("/");
    } else {
      setConnectButton("Backoffice");
      history.push("/backoffice/login");
    }
  };

  //   If the user is logged in the click on the logo wil redirect to the backoffice homepage, if not to the user homepage.

  const handleLogoClick = () => {
    if (logged === true) {
      history.push("/backoffice");
    } else {
      history.push("/");
    }
  };

  return (
    <div className='header-div'>
      <img
        onClick={handleLogoClick}
        className='logo'
        src={logo}
        alt='tell-me-more'
      />
      <div onClick={handleBtn} className='login-btn'>
        {connectButton}
      </div>
    </div>
  );
}

export default Header;
