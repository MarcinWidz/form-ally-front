import ".//QuestionComponent.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function QuestionComponent({
  order,
  type,
  handleAddQuestion,
  handleBodyChange,
  saved,
  body,
  inputBody,
  questionsData,
  setQuestionsData,
  index,
}) {
  const handleDelete = async () => {
    try {
      console.log(questionsData);
      const response = axios.delete(
        `https://form-ally.herokuapp.com/backoffice/delete/${questionsData[index]._id}`
      );
      const copy = [...questionsData];
      copy.splice(index, 1);
      console.log(index);
      setQuestionsData(copy);
      console.log("QUESTiON DATA:", questionsData);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className='question-component'>
        <div className='order-type'>
          {type === "note" ? (
            <div className='note-component-div'>
              <p className='order'>{order}</p>
              <FontAwesomeIcon className='icon' icon='sticky-note' /> {type}
            </div>
          ) : type === "text" ? (
            <div className='text-component-div'>
              <p className='order'>{order}</p>
              <FontAwesomeIcon className='icon' icon='file-alt' /> {type}
            </div>
          ) : type === "yes/no" ? (
            <div className='yes-component-div'>
              <p className='order'>{order}</p>
              <FontAwesomeIcon className='icon' icon='check' /> {type}
            </div>
          ) : (
            <div className='email-component-div'>
              <p className='order'>{order}</p>
              <FontAwesomeIcon className='icon' icon='envelope' /> {type}
            </div>
          )}
        </div>
        {!saved ? (
          <input
            placeholder='Saisissez votre question ici'
            value={inputBody}
            onChange={handleBodyChange}
            className='input-field'
          ></input>
        ) : (
          body
        )}
        {!saved ? (
          <button
            className='addQuestion'
            onClick={() => {
              handleAddQuestion(type);
            }}
          >
            Add
          </button>
        ) : (
          <div style={{ display: "flex" }}>
            <button
              onClick={() => {
                handleDelete();
              }}
              className='delete'
            >
              delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionComponent;

// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body))
