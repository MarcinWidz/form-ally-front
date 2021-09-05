import React from "react";
import "./AnswerComponentTexte.css";

function AnswerComponentTexte({ setAnswers, formInfo, counter }) {
  return (
    <div>
      <div className='textComponentDiv'>
        <p className='question'>{formInfo.questions[counter].body}</p>
        <div className='input-div'>
          <textarea
            className='textArea'
            onChange={(e) => {
              setAnswers(e.target.value);
            }}
            name=''
            id=''
            cols='30'
            rows='10'
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AnswerComponentTexte;
