import "./AngerHelpPage.css";
import { useState } from "react";

export default function AngerHelpPage() {
  const [randomGYMs, setRandomGYMs] = useState("");
  const [modelAnger, setModelAnger] = useState(false);
  const [modelTakeTimeOUT, setmodelTakeTimeOUT] = useState(false);

  const Gyms = [
    {
      name: "CrossFit Jerusalem",
      location: "George Washington St 4a, Jerusalem, Israel",
      phone: "054-313-2568",
    },
    {
      name: "VIP GYM",
      location: "King George St 3, Jerusalem, 9422903, Israel",
      phone: " 077-204-2606",
    },
    {
      name: "Fitland Jerusalem מועדון הכושר והבריאות בירושלים",
      location: " Hartom St 16, Jerusalem, 9777516, Israel",
      phone: " 054-827-3393",
    },
    {
      name: "Country GYM Pisgat Zeev - קאנטרי פסגת זאב",
      location: "Sderot Moshe Dayan 131،, Jerusalem",
      phone: " 02-970-0250",
    },
  ];

  const selectRandomGYM = () => {
    const randomIndex = Math.floor(Math.random() * Gyms.length);
    const randomGYM = Gyms[randomIndex];

    setRandomGYMs(randomGYM);
    setModelAnger(true);
  };

  return (
    <>
      <h1>hello from anger help page</h1>
      <div className="AngerImg-Countainer">
        <div className="Gym-section">
          <h2>Get some exercise</h2>
          <p>Suggestions for a gym in the area</p>
          <img
            onClick={selectRandomGYM}
            src="https://img.freepik.com/premium-vector/fit-man-doing-exercise_18591-41239.jpg?w=740"
            alt="GYM-img"
          ></img>
        </div>
        <div className="TimeOut-section">
          <h2>Take a timeout</h2>

          <img
            onClick={(e) => setmodelTakeTimeOUT(true)}
            src="https://img.freepik.com/free-vector/coffee-break-concept-illustration_114360-3707.jpg?w=740&t=st=1678350163~exp=1678350763~hmac=e82d086ae26ae42b5e839a2bab94df18bf4795e183947522a18c3e0f54939f3a"
            alt="TimeOut-img"
          ></img>
          {modelTakeTimeOUT && (
            <div className="modal-anger">
              <div className="modal-anger-content">
                <p>
                  Give yourself a break. Sit away from others. In this quiet
                  time, you can process events and return your emotions to
                  neutral. You may even find this time away from others is so
                  helpful you want to schedule it into your daily routine.
                </p>
                <p> Was This HelpFull</p>
                <button onClick={() => setmodelTakeTimeOUT(false)}> Yes</button>
                <button onClick={() => setmodelTakeTimeOUT(false)}> No</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {modelAnger && (
        <div className="modal-anger">
          <div className="modal-anger-content">
            <h3 style={{ textAlign: "center" }}>{randomGYMs.name}</h3>
            <p> Address : {randomGYMs.location}</p>
            <p> Phone Number: {randomGYMs.phone}</p>
            <button onClick={() => setModelAnger(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
