import React from "react";
import "./AnswerComponentEmail.css";
function AnswerComponentEmail({ setAnswers, formInfo, counter }) {
  return (
    <div>
      <p>{formInfo.questions[counter].body}</p>
      <div className='input-div'>
        <textarea
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
  );
}

export default AnswerComponentEmail;
