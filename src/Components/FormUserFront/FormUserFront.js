import React from "react";
import "./FormUserFront.css";

import { Link } from "react-router-dom";

function FormUserFront() {
  return (
    <Link to='/form'>
      <div className='form-user-front'>Consulter le formulaire</div>
    </Link>
  );
}

export default FormUserFront;
