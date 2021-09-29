import React from "react";
import "./AnswerComponentYesNo.css";
import { useState } from "react";
import styled, { css } from "styled-components";

function AnswerComponentYesNo({ setAnswers, formInfo, counter }) {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const Button = styled.button`
    cursor: pointer;
    border: 1px solid #4595e4;
    color: #4595e4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 28px;
    border-radius: 5px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    ${(props) =>
      props.primary &&
      css`
        background-color: #4595e4;
        color: white;
      `}
  `;

  return (
    <div className=''>
      <p>{formInfo.questions[counter].body}</p>
      <div className='flex'>
        <Button
          primary={yesClicked}
          onClick={() => {
            !yesClicked ? setYesClicked(true) : setYesClicked(false);
            noClicked && setNoClicked(false);
            setAnswers("Oui");
          }}
        >
          Oui
        </Button>
        <Button
          primary={noClicked}
          onClick={() => {
            !noClicked ? setNoClicked(true) : setNoClicked(false);
            yesClicked && setYesClicked(false);
            setAnswers("Non");
          }}
        >
          Non
        </Button>
      </div>
    </div>
  );
}

export default AnswerComponentYesNo;
