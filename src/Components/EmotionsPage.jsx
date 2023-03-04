import React, { useState } from "react";
import SadHelpPage from "./SadHelpPage";

function EmotionsPage() {
  const [redirectTo, setRedirectTo] = useState(false);

  const handleImageClick = () => {
    setRedirectTo(true);
  };

  if (redirectTo) {
    return <SadHelpPage />;
  }

  return (
    <>
      <h1> how do you feel today </h1>
      <div className="emoji">
        <div onClick={handleImageClick}>
          <img
            src="https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji.png"
            alt="sad"
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
