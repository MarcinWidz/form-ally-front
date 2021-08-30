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

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    console.log(value);
  };

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

  const handleQuestionSave = async () => {
    try {
      const response = axios.post(
        "http://localhost:3000/backoffice/create/questions",
        {
          body: "",
          order: 1,
          type: "",
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleQuestionCreation = (type) => {
    // on the first click only the component is pushed so it can be displayed, but no data is pushed as it would set the first element of the array to undefined.

    if (order === 0) {
      setOrder(order + 1);
      const copy = [...questionComponent];
      copy.push(
        <QuestionComponent
          order={order}
          type={`${type}`}
          body={body}
          setBody={setBody}
          setAlert={setAlert}
        />
      );
      setQuestionComponent(copy);
      setUpdated(!updated);
      console.log("questionsData:", questionsData);
    } else {
      setOrder(order + 1);
      const copy2 = [...questionsData];
      copy2.push({
        body: body,
        order: order,
        type: type,
      });
      setQuestionsData(copy2);
      const copy = [...questionComponent];
      copy.push(
        <QuestionComponent
          order={order}
          type={`${type}`}
          body={body}
          setBody={setBody}
          setAlert={setAlert}
          questionComponent={questionComponent}
        />
      );
      setQuestionComponent(copy);
      setUpdated(!updated);
      console.log("questionsData:", questionsData);
    }
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
      {/* <AddQuestion></AddQuestion> */}
      <div className='questions-container'>{questionComponent}</div>
    </div>
  );
}

export default BackofficeCreate;
