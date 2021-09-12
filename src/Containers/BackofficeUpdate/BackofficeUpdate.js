import React from "react";
import "./BackofficeUpdate.css";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import colors from "../../assets/themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auto } from "async";

function BackofficeUpdate({ e }) {
  const location = useLocation();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [questionsData, setQuestionsData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [userForms, setUserForms] = useState(null);
  const [alert, setAlert] = useState();

  const id = location.state.e._id;
  const form = location.state.e;

  console.log(location.state.e);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://form-ally.herokuapp.com/backoffice/get-form-to-update/${id}`
        );
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

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleSaveClick = async () => {
    if (!title) {
      setAlert("Le titre du formulaire ne peux pas être vide");
      return;
    } else {
      setAlert(null);
      try {
        const response = await axios.post(
          `https://form-ally.herokuapp.com/backoffice/update-form/${id}`,
          {
            title: title,
            slug: title,
            theme: colors,
            questions: questionsData,
          }
        );
        history.push("/");
        console.log("RESPONSE", response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleDeleteAll = async () => {
    try {
      console.log("Delete All:", questionsData);
      const response = axios.post(
        "https://form-ally.herokuapp.com/backoffice/delete-all/",
        { questionsData }
      );
      console.log(response.data);
      setQuestionsData([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <p>chargement...</p>
  ) : (
    <div>
      <div>
        <div className='header'>
          <button
            onClick={() => {
              history.push("/backoffice");
            }}
            className='backBtn'
          >
            Retour
          </button>
          <input
            onChange={handleTitleChange}
            className='title'
            placeholder='Titre du formulaire'
            type='text'
            value={form.title}
          ></input>
          <div>
            <button
              className='backBtn'
              onClick={() => {
                handleDeleteAll();
              }}
            >
              Suppimer
            </button>
            <button className='saveBtn' onClick={handleSaveClick}>
              Sauvgarder
            </button>
          </div>
        </div>
      </div>
      <div>
        {form.questions.map((e) => {
          return (
            <div>
              <div className='question-component'>
                <div className='order-type'>
                  {e.type === "note" ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className='note-component-div'>
                        <p className='order'>{e.order}</p>
                        <FontAwesomeIcon
                          className='icon'
                          style={{ color: "white" }}
                          icon='sticky-note'
                        />
                        {e.type}
                      </div>
                      <p>{e.body}</p>
                    </div>
                  ) : e.type === "text" ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className='text-component-div'>
                        <p className='order'>{e.order}</p>
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          className='icon'
                          icon='file-alt'
                        />
                        {e.type}
                      </div>
                      <p>{e.body}</p>
                    </div>
                  ) : e.type === "yes/no" ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className='yes-component-div'>
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          className='icon'
                          icon='check'
                        />
                        <p className='order'>{e.order}</p>
                        {e.type}
                      </div>
                      <p>{e.body}</p>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className='email-component-div'>
                        <p className='order'>{e.order}</p>
                        <FontAwesomeIcon
                          style={{ color: "white" }}
                          className='icon'
                          icon='envelope'
                        />
                        {e.type}
                      </div>
                      <div className='questionDiv'>
                        <p>{e.body}</p>
                      </div>
                    </div>
                  )}
                </div>

                {
                  <div style={{ display: "flex" }}>
                    <button
                      // onClick={() => {
                      //   handleDelete();
                      // }}
                      className='delete'
                    >
                      delete
                    </button>
                  </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BackofficeUpdate;
