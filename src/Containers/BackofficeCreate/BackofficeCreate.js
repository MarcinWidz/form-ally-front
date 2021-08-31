import { useState, useEffect } from "react";
import "./BackofficeCreate.css";
import axios from "axios";
import QuestionComponent from "../../Components/QuestionComponent/QuestionComponent";
import colors from "../../assets/themes.json";

function BackofficeCreate() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState();
  const [alert, setAlert] = useState();
  const [questionComponent, setQuestionComponent] = useState([]);
  const [questionsData, setQuestionsData] = useState([]);
  const [order, setOrder] = useState(1);
  const [body, setBody] = useState();
  const [updated, setUpdated] = useState(false);
  const [typeState, setTypeState] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    console.log(value);
  };

  const objectToSend = { body: body, order: order, type: typeState };
  console.log("objectToSend:", objectToSend);

  const handleAddQuestion = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/backoffice/create/questions",
        objectToSend
      );
      console.log("body:", body);
      console.log("order:", order);
      console.log("type:", typeState);
      console.log("response:", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   setUpdated(!updated);
  // }, [body]);

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

  const handleChange = (newValue) => {
    setBody(newValue);
  };
  console.log("body in the parent:", body);

  const handleQuestionCreation = (type) => {
    const copy = [];
    setTypeState(type);
    copy.push(
      <QuestionComponent
        order={order}
        body={body}
        type={`${type}`}
        onChange={handleChange}
        setAlert={setAlert}
        typeState={typeState}
        handleAddQuestion={handleAddQuestion}
      />
    );
    setQuestionComponent(copy);
  };

  return (
    <div>
      <div className='header'>
        <div>Back</div>
        <input
          onChange={handleInputChange}
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
      {body}
      <div className='questions-container'>
        {questionsData.map((e, i) => {
          return (
            <QuestionComponent
              order={order}
              // body={body}
              type={`${typeState}`}
              setAlert={setAlert}
              questionComponent={questionComponent}
            />
          );
        })}
        {questionComponent}
      </div>
    </div>
  );
}

export default BackofficeCreate;
