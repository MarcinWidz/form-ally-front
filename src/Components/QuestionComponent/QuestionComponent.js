import ".//QuestionComponent.css";
import { useState } from "react";
function QuestionComponent({
  order,
  type,
  handleAddQuestion,
  handleBodyChange,
  saved,
  body,
  inputBody,
}) {
  console.log("body:", body);
  console.log("saved:", saved);
  return (
    <div>
      <div className='question-component'>
        <div className='order-type'>
          {order} {type}
        </div>
        {!saved ? (
          <input
            value={inputBody}
            type='text'
            onChange={handleBodyChange}
            className='input-field'
          ></input>
        ) : (
          body
        )}
        {!saved ? (
          <button
            onClick={() => {
              handleAddQuestion();
            }}
          >
            Add
          </button>
        ) : (
          <div style={{ display: "flex" }}>
            <button className='shuffle-up'>up</button>
            <button className='shuffle-down'>down</button>
            <button className='delete'>delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionComponent;

// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body))
