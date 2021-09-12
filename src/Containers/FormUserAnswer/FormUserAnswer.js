import { useEffect } from "react";
import "./FormUserAnswer.css";
import { useLocation } from "react-router";
import axios from "axios";

// Import of all the necessary components:

import AnswerComponentNote from "../../Components/AnswerComponents/AnswerComponentNote/AnswerComponentNote";
import AnswerComponentTexte from "../../Components/AnswerComponents/AnswerComponentTexte/AnswerComponentTexte";
import AnswerComponentEmail from "../../Components/AnswerComponents/AnswerComponentEmail/AnswerComponentEmail";
import AnswerComponentYesNo from "../../Components/AnswerComponents/AnswerComponentYesNo/AnswerComponentYesNo";
import SentComponent from "../../Components/SentComponent/SentComponent";

import { useState } from "react";

function FormUserAnswer(props) {
  const location = useLocation();
  const formInfo = location.state.e;
  const [answers, setAnswers] = useState();
  const [dataToSend, setDataToSend] = useState([]);
  const [counter, setCounter] = useState(0);
  const type = formInfo.questions[counter].type;
  const length = formInfo.questions.length;
  const [sent, setSent] = useState(null);
  const [uuidState, setUuIdState] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    const generateUuID = () => {
      const uuid = Math.floor(Math.random() * 100);
      setUuIdState(uuid);
      console.log("qdqsdfsdfsdqfzf:", uuidState);
    };
    generateUuID();
  }, []);

  const sendData = async () => {
    try {
      const response = await axios.post(
        "https://form-ally.herokuapp.com/form/send/",
        {
          form_id: formInfo._id,
          question_id: formInfo.questions[counter]._id,
          body: answers,
          uuid: uuidState,
        }
      );
      const copy = [...dataToSend];
      copy.push(response.data);
      console.log("RESPONSE:", response.data);
      setDataToSend(copy);
      const answer = response.data;
      updateQuestionAnswers(answer);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("UUID", uuidState);
  console.log("dataToSendState:", dataToSend);
  console.log("formInfo._id:", formInfo._id);

  const updateQuestionAnswers = async (answer) => {
    console.log("ID:", answer);
    try {
      const response = await axios.post(
        `https://form-ally.herokuapp.com/${answer.form_id}`,
        answer
      );
      console.log("update:", response.data);
      console.log("ANSWER:", answer);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSend = () => {
    if (counter < length - 1) {
      sendData();
      setCounter(counter + 1);
    } else {
      sendData();
      console.log("dataToSendLastSend:", dataToSend);
      setSent(true);
      console.log("SENT:", sent);
    }
  };

  console.log("length:", length);
  console.log("counter:", counter);
  return (
    <div className='bodyDiv'>
      <div className='center'>
        {!sent ? (
          <div className='componentDiv'>
            <h1>{formInfo.title}</h1>
            {type === "note" ? (
              <AnswerComponentNote
                setAnswers={setAnswers}
                counter={counter}
                formInfo={formInfo}
              />
            ) : type === "email" ? (
              <AnswerComponentEmail
                setAnswers={setAnswers}
                counter={counter}
                formInfo={formInfo}
              />
            ) : type === "text" ? (
              <AnswerComponentTexte
                setAnswers={setAnswers}
                counter={counter}
                formInfo={formInfo}
              />
            ) : (
              type === "yes/no" && (
                <AnswerComponentYesNo
                  setAnswers={setAnswers}
                  counter={counter}
                  formInfo={formInfo}
                />
              )
            )}
            <button
              className='nextBtn'
              onClick={() => {
                handleSend();
              }}
            >
              Next
            </button>
          </div>
        ) : (
          <SentComponent
            sent={sent}
            setSent={setSent}
            setCounter={setCounter}
            formInfo={formInfo}
            dataToSend={dataToSend}
            setDataToSend={setDataToSend}
          />
        )}
      </div>
    </div>
  );
}

export default FormUserAnswer;
