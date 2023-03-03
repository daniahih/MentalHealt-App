import React, { useState } from "react";
// import StressHelpPage from "./StressHelp";

function EmotionsPage() {
  const [redirectTo, setRedirectTo] = useState(false);

  const handleImageClick = () => {
    setRedirectTo(true);
  };

  if (redirectTo) {
    return <> hwllle</>;
  }

  return (
    <>
      <h1> how do you feel today </h1>
      <div className="emoji">
        <div onClick={handleImageClick}>
          <img
            src="https://img.freepik.com/free-vector/student-stress-concept-illustration_114360-8908.jpg?w=2000"
            alt="Happy"
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/496261720/vector/smiling-emoticon-with-smiling-eyes.jpg?s=612x612&w=0&k=20&c=bp-70mH9FIM4fBaEY7ke7FG4Gs0bJEowIpgk2as8Nc4="
            alt="Sad"
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/496261720/vector/smiling-emoticon-with-smiling-eyes.jpg?s=612x612&w=0&k=20&c=bp-70mH9FIM4fBaEY7ke7FG4Gs0bJEowIpgk2as8Nc4="
            alt="Angry"
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/496261720/vector/smiling-emoticon-with-smiling-eyes.jpg?s=612x612&w=0&k=20&c=bp-70mH9FIM4fBaEY7ke7FG4Gs0bJEowIpgk2as8Nc4="
            alt="Surprised"
            width="200px"
            height="200px"
          />
        </div>
      </div>
    </>
  );
}

export default EmotionsPage;
