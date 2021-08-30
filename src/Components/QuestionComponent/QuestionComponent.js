import ".//QuestionComponent.css";
import { useState } from "react";

function QuestionComponent({ order, type, body, setBody, setAlert }) {
  const [updated, setUpdated] = useState(false);

  const handleChange = (event) => {
    setBody({ value: event.target.value });
    setUpdated(!updated);
  };

  let input;

  // if (type === "text") {
  //   input = (
  //     <input type='text' onChange={handleChange} className='text-field'></input>
  //   );
  // } else if (type === "email") {
  //   input = (
  //     <input
  //       type='email'
  //       onChange={handleChange}
  //       className='text-field'
  //     ></input>
  //   );
  // } else if (type === "note") {
  // }

  return (
    <div>
      <div className='question-component'>
        <div className='order-type'>
          {order} {type}
        </div>
        <input
          type='text'
          onChange={handleChange}
          className='input-field'
        ></input>

        <div style={{ display: "flex" }}>
          <div className='shuffle-up'>up</div>
          <div className='shuffle-down'>down</div>
          <div className='delete'>delete</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionComponent;

// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body))
