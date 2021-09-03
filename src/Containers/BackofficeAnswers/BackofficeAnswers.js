import React from "react";
import "./BackofficeAnswers.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function BackofficeAnswers() {
  const location = useLocation();
  const formInfo = location.state.e;
  const [isLoading, setisLoading] = useState(true);
  const [answers, setAnswers] = useState();

  useEffect(() => {
    console.log("FORM INFO:", formInfo);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/form/get/answers/${formInfo._id}`
        );

        console.log("RESPONSE:", response.data);
        setAnswers(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log("ANSWERS:", answers);

  return isLoading ? <p>Chargement...</p> : <div>Hi</div>;
}

export default BackofficeAnswers;
