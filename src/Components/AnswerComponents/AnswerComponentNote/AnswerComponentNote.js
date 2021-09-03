import React from "react";
import "./AnswerComponentNote.css";

function AnswerComponentNote({ setAnswers, formInfo, counter }) {
  let notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (e) => {
    console.log("clicked:", e);
    console.log("formInfo:", formInfo);
    setAnswers(e);
  };

  return (
    <div>
      <p>{formInfo.questions[counter].body}</p>
      <div className='input-div'>
        {notes.map((e, i) => {
          return (
            <div
              onClick={() => {
                handleClick(e);
                console.log("note:", e);
              }}
            >
              <input name='note' type='radio'></input>
              <span className='note-field'>{e}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnswerComponentNote;
