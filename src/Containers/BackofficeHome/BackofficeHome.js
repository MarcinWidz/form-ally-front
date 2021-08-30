import React from "react";
import "./BackofficeHome.css";
import { Link } from "react-router-dom";
import axios from "axios";

import FormBackoffice from "../../Components/FormBackoffice/FormBackoffice";

function BackofficeHome() {
  // const handleClick = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/backoffice/create",
  //       {
  //         title: "",
  //         slug: "",
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className='container'>
      <Link to='/backoffice/create'>
        <div className='add-button'>+</div>
      </Link>
      <FormBackoffice />
    </div>
  );
}

export default BackofficeHome;
