import React, { useState } from "react";
import SadHelpPage from "./SadHelpPage";
import StressHelpPage from "./StressHelpPage";

function EmotionsPage() {
  const [redirectTo, setRedirectTo] = useState(false);
  const [redirectToStress, setRedirectToStress] = useState(false);

  const handleImageClick = () => {
    setRedirectTo(true);
  };

  if (redirectTo) {
    return <SadHelpPage />;
  }

  const handelStressImage = () => {
    setRedirectToStress(true);
  };

  if (redirectToStress) {
    return <StressHelpPage />;
  }

  return (
    <>
      <h1> how do you feel today </h1>
      <div className="emoji">
        <div onClick={handleImageClick}>
          <h1>sad</h1>
          <img
            src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png"
            alt="sad"
            width="200px"
            height="200px"
          />
        </div>
        <div onClick={handelStressImage}>
          <h1>stress</h1>
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/66/81/25/1000_F_366812548_8TunZG247i3UYiRj34fMk0xU181xUioS.jpg"
            alt="Sad"
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <h1>shy</h1>
          <img
            src="https://media.istockphoto.com/id/496261720/vector/smiling-emoticon-with-smiling-eyes.jpg?s=612x612&w=0&k=20&c=bp-70mH9FIM4fBaEY7ke7FG4Gs0bJEowIpgk2as8Nc4="
            alt="Angry"
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <h1>happy</h1>
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
