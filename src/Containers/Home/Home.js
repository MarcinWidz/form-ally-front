import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import FormUserFront from "../../Components/FormUserFront/FormUserFront";
import { Link } from "react-router-dom";

function Home() {
  const [isLoading, setisLoading] = useState(true);
  const [userForms, setUserForms] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/backoffice");
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
    <div className='container'>
      {userForms.map((e, i) => {
        return (
          <div>
            <Link to={{ pathname: `/form/${e.slug}`, state: { e: e } }}>
              <FormUserFront key={i} e={e} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
