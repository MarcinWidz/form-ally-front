import React from "react";
import "./FormUserFront.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormUserFront({ e }) {
  const uuid = Math.floor(Math.random() * 100);
  console.log(uuid);

  return (
    <div className='formUserFrontDiv'>
      <Link
        className='form-front-component'
        to={{ pathname: `/form/${e.slug}`, state: { e: e, uuid: uuid } }}
      >
        <div className='form-consulter'>{e.title}</div>
      </Link>
      <Link to={{ pathname: `/form/${e.slug}`, state: { e: e, uuid: uuid } }}>
        <FontAwesomeIcon className='external' icon='external-link-alt' />
      </Link>
    </div>
  );
}

export default FormUserFront;
