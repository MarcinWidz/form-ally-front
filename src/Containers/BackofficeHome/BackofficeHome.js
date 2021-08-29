import React from "react";
import "./BackofficeHome.css";
import { Link } from "react-router-dom";

import FormBackoffice from "../../Components/FormBackoffice/FormBackoffice";

function BackofficeHome() {
  return (
    <div className='container'>
      <Link to='/backoffice/create'>
        <div className='add-button'>+</div>
      </Link>
      <FormBackoffice />
    </div>
  );
}

export default BackofficeHome;
