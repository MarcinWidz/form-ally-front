import React from "react";
import "./FormBackoffice.css";

import { Link } from "react-router-dom";

function FormBackoffice() {
  return (
    <div className='form-placeholder'>
      <div className='btns-form-div'>
        <Link to='/backoffice/update'>
          <div className='editer'>Editer</div>
        </Link>
        <Link to='/backoffice/answers'>
          <div className='voir'>Voir</div>
        </Link>
      </div>
    </div>
  );
}
export default FormBackoffice;
