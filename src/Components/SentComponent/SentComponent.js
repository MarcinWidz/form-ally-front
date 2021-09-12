import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./SentComponent.css";

function SentComponent({
  sent,
  setSent,
  setCounter,
  setDataToSend,
  dataToSend,
  formInfo,
  updateForm,
}) {
  const remove = [];
  const history = useHistory();
  const handleClick = async () => {
    console.log(sent);
    for (let i = 0; i < dataToSend.length; i++) {
      console.log("data component click:", dataToSend.length);
      remove.push(dataToSend[i]._id);
      console.log("remove:", remove);
    }
    try {
      console.log("remove in try:", remove);
      const response = axios.post(
        "https://form-ally.herokuapp.com/form/restart",
        {
          ids: remove,
        }
      );
      setDataToSend([]);
      console.log("response:", response.data);
    } catch (error) {
      console.log(error.message);
    }
    setCounter(0);
    setSent(false);
  };

  return (
    <div>
      <h1>Vos réponses ont bien été enregistrées!</h1>
      <div className='sentDiv'>
        <button
          className='restartBtn'
          onClick={() => {
            handleClick();
          }}
        >
          Recommencer
        </button>
        <button
          className='restartBtn'
          onClick={() => {
            history.push("/");
          }}
        >
          Retourner à l'acceuil
        </button>
      </div>
    </div>
  );
}

export default SentComponent;
