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

// let notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// : notes.map((e, i) => {
//     return (
//       <div className='input-div'>
//         <input
//           onClick={() => {
//             handleClick(e);
//             console.log("note:", e);
//           }}
//           name='note'
//           type='radio'
//         ></input>
//         <span className='note-field'>{e}</span>
//       </div>
//     );
//   })}
