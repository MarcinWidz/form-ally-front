import React from "react";
import "./BackofficeAnswers.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import BackofficeAnswersComponent from "./BackOfficeAnswersComponent";
import Loading from "../../Components/Loading";

function BackofficeAnswers() {
  const location = useLocation();
  const formInfo = location.state.e;
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://form-ally.herokuapp.com/form/get/answers/${formInfo._id}`
        );
        setData(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? <Loading /> : <BackofficeAnswersComponent data={data} />;
}

export default BackofficeAnswers;
