import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GetAjoke.css";

export default function GetAjoke() {
  let Navigate = useNavigate();
  const [joke, setJoke] = useState([]);
  const fetchData = () => {
    return fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
      method: "GET",
      headers: { "X-Api-Key": "hP/aoODS/d6JKlt7xpfvBw==vs16p5dcvHogrHFN" },
      contentType: "application/json",
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke([...data]);
        console.log(data); // Add this line to see the data in console log
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  function HandelYes() {
    Navigate("/emotionpage");
    alert(" we are always here to help you ");
  }
  function HandelNo() {
    Navigate("/SadHelpPage");
  }
  return (
    <div>
      <div className="joke">
        {joke.map((e) => {
          return <>{e.joke}</>;
        })}
      </div>
      <div className="help">
        <p> do it makes you feel better </p>
        <button onClick={HandelYes}>Yes</button>
        <button onClick={HandelNo}>No</button>
      </div>
    </div>
  );
}
