import ".//QuestionComponent.css";

function QuestionComponent({
  order,
  type,
  handleAddQuestion,
  handleBodyChange,
}) {
  return (
    <div>
      <div className='question-component'>
        <div className='order-type'>
          {order} {type}
        </div>
        <input
          type='text'
          onChange={handleBodyChange}
          className='input-field'
        ></input>
        <button
          onClick={() => {
            handleAddQuestion();
          }}
        >
          Add
        </button>
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
