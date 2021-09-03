import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  //   console.log("data:", dataToSend);
  //   console.log("formInfo:", formInfo);

  const handleClick = async () => {
    console.log(sent);
    for (let i = 0; i < dataToSend.length; i++) {
      console.log("data component click:", dataToSend.length);
      remove.push(dataToSend[i]._id);
      console.log("remove:", remove);
    }
    try {
      console.log("remove in try:", remove);
      const response = axios.post("http://localhost:3000/form/restart", {
        ids: remove,
      });
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
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Recommencer
      </button>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Retourner à l'acceuil
      </button>
    </div>
  );
}

export default SentComponent;
