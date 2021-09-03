import React from "react";
import "./AnswerComponentYesNo.css";

function AnswerComponentYesNo({ setAnswers, formInfo, counter }) {
  return (
    <div>
      <p>{formInfo.questions[counter].body}</p>
      <div className='input-div'>
        <textarea name='' id='' cols='30' rows='10'></textarea>
      </div>
    </div>
  );
}

export default AnswerComponentYesNo;
