import React, { useState } from "react";
import "./EmotionPage.css";
import { useNavigate } from "react-router-dom";

function EmotionsPage() {
  let navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useState(false);
  const [redirectToStress, setRedirectToStress] = useState(false);
  const [redirectToShy, setRedirectToShy] = useState(false);
  const [redirectToHappy, setredirectToHappy] = useState(false);

  const handleImageClick = () => {
    setRedirectTo(true);
  };

  if (redirectTo) {
    navigate("/SadHelpPage");
  }

  const handelStressImage = () => {
    setRedirectToStress(true);
  };

  if (redirectToStress) {
    navigate("/StressHelpPage");
  }
  const handelShyImage = () => {
    setRedirectToShy(true);
  };

  if (redirectToShy) {
    navigate("/ShyHelpPage");
  }
  const handelHappyImage = () => {
    setredirectToHappy(true);
  };

  if (redirectToHappy) {
    navigate("/HappyHelpPage");
  }

  return (
    <>
      <h1 className="title"> How do you feel today </h1>
      <div className="emotion-Countainer">
        {/* sad div */}
        <div onClick={handleImageClick} className="card">
          <h1>Sad</h1>
          <div className="card-countainer">
            <p>
              "Sometimes the strongest people in the morning are the ones who
              cried all night."
            </p>

            <img
              src="https://img.freepik.com/free-vector/anxiety-concept-illustration_114360-8014.jpg?w=740&t=st=1677950339~exp=1677950939~hmac=98c0f0f09767f5854023b6bd276bc6d3f18e29d31628260d87d42341d6380172"
              alt="sad"
              width="200px"
              height="200px"
            />
          </div>
        </div>

        <div onClick={handelStressImage} className="card">
          <h1>stress</h1>
          <div className="card-countainer">
            <p>
              "Adopting the right attitude can convert a negative stress into a
              positive one."
            </p>
            <img
              src="https://img.freepik.com/free-vector/anxiety-concept-illustration_114360-8074.jpg?w=740&t=st=1677950401~exp=1677951001~hmac=efbc1bf6d05ec2bd8f2242cc5efeb91a37116dd0ea96c0d81ac05fa6f595452e"
              alt="STress"
              width="200px"
              height="200px"
            />
          </div>
        </div>
        <div onClick={handelShyImage} className="card">
          <h1>shy</h1>
          <img
            src="https://img.freepik.com/free-vector/shy-concept-illustration_114360-3475.jpg?w=740&t=st=1677950459~exp=1677951059~hmac=5384251d2448bb4858d7df64695a1d7326ae0673964b98a0e2383f25be189d11"
            alt="Shy"
            width="200px"
            height="200px"
          />
        </div>
        <div onClick={handelHappyImage} className="card">
          <h1>happy</h1>
          <img
            src="https://img.freepik.com/free-vector/enthusiastic-concept-illustration_114360-3478.jpg?w=740&t=st=1677950815~exp=1677951415~hmac=be6efbc74495ac4ae8894f51fccfaa056abbfacc4d8caf939703ce526669519e"
            alt="Surprised"
            width="200px"
            height="200px"
          />
        </div>
        <div onClick={handelHappyImage} className="card">
          <h1>scared</h1>
          <img
            src="https://img.freepik.com/free-vector/anxiety-concept-illustration_114360-8054.jpg?w=740&t=st=1678009537~exp=1678010137~hmac=06d98017af972aa019bcc43793d42df1c879051f71f15139eafe7cc96fa938c2"
            alt="scared"
            width="200px"
            height="200px"
          />
        </div>
      </div>
    </>
  );
}

export default EmotionsPage;
