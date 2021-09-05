import React from "react";
import "./AnswerComponentYesNo.css";

function AnswerComponentYesNo({ setAnswers, formInfo, counter }) {
  return (
    <div className=''>
      <p>{formInfo.questions[counter].body}</p>
      <div className='flex'>
        <div
          className='yesNoButtons'
          onClick={() => {
            setAnswers("Oui");
          }}
        >
          Oui
        </div>
        <div
          onClick={() => {
            setAnswers("Oui");
          }}
          className='yesNoButtons'
        >
          Non
        </div>
      </div>
    </div>
  );
}

export default AnswerComponentYesNo;
