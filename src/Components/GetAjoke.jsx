import { useState, useEffect } from "react";

export default function GetAjoke() {
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
  return (
    <div>
      {joke.map((e) => {
        return <>{e.joke}</>;
      })}
    </div>
  );
}
