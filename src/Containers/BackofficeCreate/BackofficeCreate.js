import { useState, useEffect } from "react";
import "./BackofficeCreate.css";
import axios from "axios";
import QuestionComponent from "../../Components/QuestionComponent/QuestionComponent";
import colors from "../../assets/themes.json";

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

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    console.log(value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
    console.log("bbbbb:", body);
  };

  const objectToSend = { body: body, order: order, type: type };

  console.log("objectToSend:", objectToSend);

  const handleAddQuestion = async () => {
    setSaved(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/backoffice/create/questions",
        objectToSend
      );
      console.log("response:", response.data);
      const copy = [...questionsData];
      copy.push(response.data);
      setQuestionsData(copy);
      setBody("");
    } catch (error) {
      console.log(error.message);
    }
    setOrder(order + 1);
  };
  console.log(questionsData);
  const handleSaveClick = async () => {
    if (!title) {
      setAlert("Le titre du formulaire ne peux pas être vide");
      return;
    } else {
      setAlert(null);
      try {
        const response = await axios.post(
          "http://localhost:3000/backoffice/create",
          {
            title: title,
            slug: title,
            theme: colors,
            questions: questionsData,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleQuestionCreation = (type) => {
    setType(type);
    setShow(true);
  };

  return (
    <div>
      <div className='header'>
        <div>Back</div>
        <input
          onChange={handleTitleChange}
          className='title'
          placeholder='title'
          type='text'
        ></input>
        <div>
          <button>Suppimer</button>
          <button onClick={handleSaveClick}>Sauvgarder</button>
        </div>
      </div>
      <p style={{ color: "red" }}>{alert}</p>
      <div className='questions'>
        <div
          onClick={() => {
            handleQuestionCreation("text");
          }}
        >
          Ajouter une question Texte
        </div>
        <div
          onClick={() => {
            handleQuestionCreation("note");
          }}
        >
          Ajouter une question Note
        </div>
        <div
          onClick={() => {
            handleQuestionCreation("email");
          }}
        >
          Ajouter une question Email
        </div>
        <div
          onClick={() => {
            handleQuestionCreation("yes/no");
          }}
        >
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default BackofficeCreate;
