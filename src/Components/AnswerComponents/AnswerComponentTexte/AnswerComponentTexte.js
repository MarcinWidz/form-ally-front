import React from "react";
import "./AnswerComponentTexte.css";

function AnswerComponentTexte({ setAnswers, formInfo, counter }) {
  return (
    <div>
      <p>{formInfo.questions[counter].body}</p>
      <div className='input-div'>
        <textarea name='' id='' cols='30' rows='10'></textarea>
      </div>
    </div>
  );
}

export default AnswerComponentTexte;
