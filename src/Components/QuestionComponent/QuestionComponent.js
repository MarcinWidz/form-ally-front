import ".//QuestionComponent.css";
import { useState } from "react";
import axios from "axios";

function QuestionComponent({
  order,
  type,
  setAlert,
  typeState,
  handleAddQuestion,
  body,
  onChange,
}) {
  const [updated, setUpdated] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
    console.log("event in the child:", event.target.value);
  };
  console.log("body in the child:", body);

  let input;

  return (
    <div>
      <div className='question-component'>
        <div className='order-type'>
          {order} {type}
        </div>
        <input
          type='text'
          // value={body}
          onChange={handleChange}
          className='input-field'
        ></input>
        <button onClick={handleAddQuestion}>Add</button>
        {/* <div style={{ display: "flex" }}>
          <div className='shuffle-up'>up</div>
          <div className='shuffle-down'>down</div>
          <div className='delete'>delete</div>
        </div> */}
      </div>
    </div>
  );
}

export default QuestionComponent;

// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body))
