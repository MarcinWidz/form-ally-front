// Imports of React elements
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// imports of the containers:
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import BackofficeHome from "./Containers/BackofficeHome/BackofficeHome";
import BackofficeCreate from "./Containers/BackofficeCreate/BackofficeCreate";
import BackofficeUpdate from "./Containers/BackofficeUpdate/BackofficeUpdate";
import BackofficeAnswers from "./Containers/BackofficeAnswers/BackofficeAnswers";
import FormUserAnswer from "./Containers/FormUserAnswer/FormUserAnswer";

// imports of the components
import Header from "./Components/Header/Header";

function App() {
  const [logged, setLogged] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [connectButton, setConnectButton] = useState("Backoffice");

  return (
    <Router>
      <Header
        logged={logged}
        setLogged={setLogged}
        setConnectButton={setConnectButton}
        connectButton={connectButton}
      />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/form'>
          <FormUserAnswer />
        </Route>
        <Route path='/backoffice/login'>
          <Login
            passwordInput={passwordInput}
            setPasswordInput={setPasswordInput}
            setLogged={setLogged}
            setConnectButton={setConnectButton}
          />
        </Route>
        <Route exact path='/backoffice'>
          <BackofficeHome />
        </Route>
        <Route path='/backoffice/create'>
          <BackofficeCreate />
        </Route>
        <Route path='/backoffice/update'>
          <BackofficeUpdate />
        </Route>
        <Route path='/backoffice/answers'>
          <BackofficeAnswers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
