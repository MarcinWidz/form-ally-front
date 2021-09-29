import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import FormUserFront from "../../Components/FormUserFront/FormUserFront";
<<<<<<< HEAD
import loading from "../../assets/loading.json";
=======
import Loading from "../../Components/Loading";
>>>>>>> 2fa0aafbc25f77353585bd476fd7cf32cdaf75d7

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
        setTimeout(() => {
          setisLoading(false);
        }, 500);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
<<<<<<< HEAD
    <div>
      <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
      <lottie-player
        src='https://assets10.lottiefiles.com/packages/lf20_giIhuM.json'
        background='transparent'
        speed='1'
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
=======
    <Loading />
>>>>>>> 2fa0aafbc25f77353585bd476fd7cf32cdaf75d7
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
