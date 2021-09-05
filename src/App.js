// Imports of React elements
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faStickyNote,
  faFileAlt,
  faKey,
  faCheck,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

// imports of the containers:
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import BackofficeHome from "./Containers/BackofficeHome/BackofficeHome";
import BackofficeCreate from "./Containers/BackofficeCreate/BackofficeCreate";
import BackofficeUpdate from "./Containers/BackofficeUpdate/BackofficeUpdate";
import BackofficeAnswers from "./Containers/BackofficeAnswers/BackofficeAnswers";
import FormUserAnswer from "./Containers/FormUserAnswer/FormUserAnswer";
import "react-notifications/lib/notifications.css";

// imports of the components
import Header from "./Components/Header/Header";
library.add(
  faEnvelope,
  faKey,
  faStickyNote,
  faFileAlt,
  faCheck,
  faExternalLinkAlt
);

function App() {
  const [logged, setLogged] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [connectButton, setConnectButton] = useState("Backoffice");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState();

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
        <Route exact path='/form/:slug'>
          <FormUserAnswer />
        </Route>
        <Route path='/backoffice/login'>
          <Login
            passwordInput={passwordInput}
            setPasswordInput={setPasswordInput}
            setLogged={setLogged}
            setConnectButton={setConnectButton}
            setUserId={setUserId}
            userId={userId}
            setPassword={setPassword}
            password={password}
          />
        </Route>
        <Route exact path='/backoffice'>
          <BackofficeHome userId={userId} />
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
