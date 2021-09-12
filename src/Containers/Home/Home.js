import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import FormUserFront from "../../Components/FormUserFront/FormUserFront";

function Home() {
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
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <div className='home-container'>
      <h1>Choisissez le questionnaire à prendre:</h1>
      {userForms.map((e, i) => {
        return (
          <div className='home-forms'>
            <FormUserFront key={i} e={e} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
