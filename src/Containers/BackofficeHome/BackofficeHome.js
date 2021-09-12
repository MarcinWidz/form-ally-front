import { useEffect, useState } from "react";
import "./BackofficeHome.css";
import { Link } from "react-router-dom";
import axios from "axios";

import FormBackoffice from "../../Components/FormBackoffice/FormBackoffice";

function BackofficeHome({ userId }) {
  const [isLoading, setisLoading] = useState(true);
  const [userForms, setUserForms] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://form-ally.herokuapp.com/backoffice"
        );
        console.log("fetch");
        console.log("mapforms:", response.data);
        setUserForms(response.data);
        setisLoading(false);
        console.log("backOffice Homee response:", response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  console.log("userId in home:", userId);
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <div className='container'>
      <Link to='/backoffice/create'>
        <div className='add-button'>+</div>
      </Link>

      {userForms.map((e, i) => {
        return <FormBackoffice e={e} />;
      })}
    </div>
  );
}

export default BackofficeHome;
