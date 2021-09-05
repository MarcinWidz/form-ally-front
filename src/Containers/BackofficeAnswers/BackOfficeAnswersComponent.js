import React from "react";
import "./BackOfficeAnswersComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackOfficeAnswersComponent({ data }) {
  /**
   * Merge the answers & forms document into a new object for HTML consumption
   */
  const form = data.form[0];
  const answers = data.answers;
  const formID = data.form[0]._id; // The form ID you want to search for

  const getQuestionIDs = () => {
    return form.questions.reduce((acc, q) => {
      acc.push(q._id);
      return acc;
    }, []);
  };

  const getFormWithAnswer = () => {
    const questionsIDs = getQuestionIDs();

    const obj = {
      id: formID,
      title: form.title,
      theme: form.theme,
      body: [],
    };

    answers.forEach((answer) => {
      const foundQuestionIndex = questionsIDs.findIndex(
        (qID) => qID === answer.question_id
      );
      // If the answer is NOT attached to the currently searched group of questions
      if (foundQuestionIndex !== -1) {
        // Construct formatted answer
        const questionAnswered = form.questions[foundQuestionIndex];
        const formattedAnswer = {
          questionType: questionAnswered.type,
          questionOrder: questionAnswered.order,
          questionBody: questionAnswered.body,
          answerBody: answer.body,
        };

        // Group answer by uuid
        const foundBodyUUID = obj.body.findIndex(
          (bodyAnswer) => bodyAnswer.uuid === answer.uuid
        );
        console.log("foundBodyUUID:", foundBodyUUID);
        if (foundBodyUUID === -1) {
          // Create a new UUID in obj body with his anwers attached
          obj.body.push({
            uuid: answer.uuid,
            answers: [formattedAnswer],
          });
        } else {
          // Append current answer to the body.uuid that has been created previously
          obj.body[foundBodyUUID].answers.push(formattedAnswer);
        }
      }
    });

    return obj;
  };

  const element = getFormWithAnswer();

  console.log("DATA TO RENDER:", element);
  return (
    <div classnName='bigContaier'>
      <h1 className='title-render'>{element.title}</h1>
      {element.body.map((item) => {
        return (
          <div className='element'>
            {item.answers.map((render) => {
              return (
                <div className='elementsContainer'>
                  <div className='a'>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <div className='typeContainer'>
                        {render.questionType === "note" ? (
                          <div className='note-component-div'>
                            {render.questionOrder}
                            <FontAwesomeIcon
                              style={{ color: "white" }}
                              className='icon'
                              icon='sticky-note'
                            />
                          </div>
                        ) : render.questionType === "text" ? (
                          <div className='text-component-div'>
                            {render.questionOrder}
                            <FontAwesomeIcon
                              style={{ color: "white" }}
                              className='icon'
                              icon='file-alt'
                            />
                          </div>
                        ) : render.questionType === "yes/no" ? (
                          <div className='yes-component-div'>
                            {render.questionOrder}
                            <FontAwesomeIcon
                              style={{ color: "white" }}
                              className='icon'
                              icon='check'
                            />
                          </div>
                        ) : (
                          <div className='email-component-div'>
                            {render.questionOrder}
                            <FontAwesomeIcon
                              style={{ color: "white" }}
                              className='icon'
                              icon='envelope'
                            />
                          </div>
                        )}
                      </div>
                      <p className='question-body'>{render.questionBody}</p>
                    </div>
                    <div className='answer-body-div'>
                      <p className='answer-body'>{render.answerBody}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default BackOfficeAnswersComponent;
