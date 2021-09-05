import React from "react";
import "./AnswerComponentEmail.css";
function AnswerComponentEmail({ setAnswers, formInfo, counter }) {
  return (
    <div>
      <p className='question'>{formInfo.questions[counter].body}</p>
      <div className='input-div'>
        <textarea
          placeholder=' ex. martin.ledru@gmail.com'
          className='emailfield'
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
