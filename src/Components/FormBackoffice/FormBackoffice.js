import React from "react";
import "./FormBackoffice.css";

import { Link } from "react-router-dom";

function FormBackoffice({ e }) {
  console.log("e", e);
  return (
    <div className='form-placeholder'>
      <h4>{e.title}</h4>
      <div className='btns-form-div'>
        <Link to={{ pathname: "/backoffice/answers", state: { e: e } }}>
          <div className='voir'>Voir</div>
        </Link>
      </div>
    </div>
  );
}
export default FormBackoffice;
