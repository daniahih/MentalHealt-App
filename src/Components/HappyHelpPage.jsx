import { useState } from "react";
import "./HappyHelpPage.css";
export default function HappyHelpPage() {
  const [randomDanceVideo, setRandomDanceVideo] = useState("");
  const [showModel, setShowModel] = useState(false);

  const DanceVideo = [
    "https://www.youtube.com/watch?v=MsXdUtlDVhk",
    "https://www.youtube.com/watch?v=ES4I2aiNUK0",
    "https://www.youtube.com/watch?v=RFfbZV3bwys",
    "https://www.youtube.com/watch?v=wvnh_50Rf4M",
    "https://www.youtube.com/watch?v=YZsy-ULEcwI",
  ];
  const selectRandomDanceVideo = () => {
    const randomIndex = Math.floor(Math.random() * DanceVideo.length);

    setRandomDanceVideo(DanceVideo[randomIndex]);
  };

  return (
    <>
      <p className="happy-title">
        If you are feeling happy, that's great! Here are a few things you can do
        to maintain and spread your happiness:{" "}
      </p>
      <div className="happy-img-countainer">
        <div className="Dance-section">
          <h2> Lets Dance </h2>
          <a href={randomDanceVideo} target="_blank">
            <img
              onClick={selectRandomDanceVideo}
              src="https://img.freepik.com/premium-vector/isolated-dancing-couple-people-dance-cute-vector-hand-draw-illustration_137966-231.jpg?w=740"
              alt="daance"
            ></img>
          </a>
        </div>
        <div className="SpreadLove-section">
          <h2> Share your happiness with others </h2>
          <img
            onClick={() => setShowModel(true)}
            src="https://img.freepik.com/free-vector/people-meeting-after-self-isolation_23-2148549263.jpg?w=740&t=st=1678265906~exp=1678266506~hmac=4f88baec79d54e29fb5fc9db82119ccce4623f5b3b2c14e7c1cb84c66e486f33"
            alt="SpreadLove"
          ></img>
          {showModel && (
            <div className="modal-container-SpreadLove">
              <div className="modal-content-SpreadLove">
                <p>
                  Spread the joy by sharing your happiness with your loved ones.
                  You could call a friend, spend time with your family, or even
                  write a letter to someone you care about.
                </p>
                <button onClick={() => setShowModel(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
