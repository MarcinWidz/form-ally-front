import { useState, useEffect } from "react";
import "./BackofficeCreate.css";
import axios from "axios";
import QuestionComponent from "../../Components/QuestionComponent/QuestionComponent";
import colors from "../../assets/themes.json";
import "../../assets/TellMeMore/fonts/tellmemore.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import "react-notifications/lib/notifications.css";

function BackofficeCreate() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState();
  const [alert, setAlert] = useState();
  const [questionsData, setQuestionsData] = useState([]);
  const [order, setOrder] = useState(1);
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);
  const [saved, setSaved] = useState(false);
  const history = useHistory();

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const objectToSend = { body: body, order: order, type: type };

  console.log("objectToSend:", objectToSend);

  const handleAddQuestion = async (type) => {
    setSaved(true);
    if (body) {
      try {
        const response = await axios.post(
          "https://form-ally.herokuapp.com/backoffice/create/questions",
          objectToSend
        );
        console.log("response:", response.data);
        console.log("OBJECT TO SEND:", objectToSend);
        const copy = [...questionsData];
        copy.push(response.data);
        setQuestionsData(copy);
        setBody("");
      } catch (error) {
        console.log(error.message);
      }
      setOrder(order + 1);
    } else {
      setAlert("Le champ de question ne peux pas être vide!");
    }
  };
  console.log("QUESTIONS DATA:", questionsData);
  const handleSaveClick = async () => {
    if (!title) {
      setAlert("Le titre du formulaire ne peux pas être vide");
      return;
    } else if (questionsData.length === 0) {
      setAlert("Il faut ajouter au moins une question");
    } else {
      setAlert(null);
      try {
        const response = await axios.post(
          "https://https://form-ally.herokuapp.com/backoffice/create",
          {
            title: title,
            slug: title,
            theme: colors,
            questions: questionsData,
          }
        );
        history.push("/");
        console.log("RESPONSE", response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleQuestionCreation = (type) => {
    setType(type);
    setShow(true);
  };

  const handleDeleteAll = async () => {
    try {
      console.log("Delete All:", questionsData);
      const response = axios.post(
        "https://form-ally.herokuapp.com/backoffice/delete-all/",
        { questionsData }
      );
      console.log(response.data);
      setQuestionsData([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className='header'>
        <button
          onClick={() => {
            history.push("/backoffice");
          }}
          className='backBtn'
        >
          Retour
        </button>
        <input
          onChange={handleTitleChange}
          className='title'
          placeholder='Titre du formulaire'
          type='text'
        ></input>
        <div>
          <button
            className='backBtn'
            onClick={() => {
              handleDeleteAll();
            }}
          >
            Suppimer
          </button>
          <button className='saveBtn' onClick={handleSaveClick}>
            Sauvgarder
          </button>
        </div>
      </div>
      <p className='alert'>{alert}</p>
      <div className='questionCreationContainer'>
        <div className='questions'>
          <div
            onClick={() => {
              handleQuestionCreation("text");
            }}
          >
            <FontAwesomeIcon className='icon' icon='file-alt' />
            Ajouter une question Texte
          </div>
          <div
            onClick={() => {
              handleQuestionCreation("note");
            }}
          >
            <FontAwesomeIcon className='icon' icon='sticky-note' />
            Ajouter une question Note
          </div>
          <div
            className='addBtn'
            onClick={() => {
              handleQuestionCreation("email");
            }}
          >
            <FontAwesomeIcon className='icon' icon='envelope' />
            <p>Ajouter une question Email</p>
          </div>
          <div
            onClick={() => {
              handleQuestionCreation("yes/no");
            }}
          >
            <FontAwesomeIcon className='icon' icon='check' />
            Ajouter une question Oui/Non
          </div>
        </div>
        <div className='questions-container'>
          {show && (
            <QuestionComponent
              handleBodyChange={handleBodyChange}
              handleAddQuestion={handleAddQuestion}
              type={type}
              setSaved={setSaved}
              inputBody={body}
            />
          )}
          {questionsData.map((e, i) => {
            return (
              <QuestionComponent
                saved={saved}
                index={i}
                order={i + 1}
                body={e.body}
                type={e.type}
                questionsData={questionsData}
                setQuestionsData={setQuestionsData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BackofficeCreate;
