import { useState, useEffect } from "react";
import GetAjoke from "./GetAjoke";
import { useNavigate } from "react-router-dom";

import "./SadHelpPage.css";
export default function SadHelpPage() {
  const [randomFunnyVideo, setRandomYogaVideo] = useState("");
  const [randomMemes, setRandomMemes] = useState("");
  const [clicked, setClicked] = useState(false);
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  function backtoHomePage() {
    return navigate("/");
  }
  const FunnyVideos = [
    "https://www.youtube.com/watch?v=ZeD4TPGpw6o",
    "https://www.youtube.com/watch?v=nS2gpCffS1U",
    "https://www.youtube.com/watch?v=XjfZFH_dhgM",
    "https://www.youtube.com/watch?v=KyYdKIuM2sQ",
  ];
  const Memes = [
    "https://static.demilked.com/wp-content/uploads/2022/09/it-humor-memes-5.jpeg",
    "https://blog.creativesafetysupply.com/wp-content/uploads/2012/10/engmeme4-e1522631885237.png",
    "https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg",
    "https://thumbor.bigedition.com/funny-travel-memes/6oz5ttHNU4_zDXBVQHY0AnTYleI=/800x570/filters:format(webp):quality(80)/granite-web-prod/5d/ef/5def5cafcf3243bdab9be14d8427291e.jpeg",
    "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
    "https://i.pinimg.com/originals/bf/cd/36/bfcd3611626a83b7d88c1613f816c613.jpg",
    "http://static.demilked.com/wp-content/uploads/2019/10/5da8209e8ce78-funny-boss-memes-coverimage2.jpg",
    "https://www.ourmindfullife.com/wp-content/uploads/2021/04/funny-best-friends-memes-and-friendship-memes-3.jpg",
    "https://cdn.memes.com/up/81964641604589304/i/1650640428490.png",
    "https://i0.wp.com/winkgo.com/wp-content/uploads/2022/04/stress-memes-01.jpg?resize=720%2C829&ssl=1",
    " https://remote-tools-images.s3.amazonaws.com/work-from-home-memes/33.jpg",
  ];
  const selectRandomFunnyVideo = () => {
    const randomIndex = Math.floor(Math.random() * FunnyVideos.length);

    setRandomYogaVideo(FunnyVideos[randomIndex]);
  };
  useEffect(() => {
    selectRandomFunnyVideo();
  }, []);

  const selectRandomMemes = () => {
    const randomIndex = Math.floor(Math.random() * Memes.length);
    setShowModal(true);
    setRandomMemes(Memes[randomIndex]);
  };

  return (
    <>
      <p className="title-sad">
        "I'm here for you and I want to support you in any way I can."
      </p>
      <div className="imgSad-countiner">
        <div className="Joke-section">
          <h2> Tell Me A joke </h2>
          <img
            onClick={() => setClicked(true)}
            src="https://img.freepik.com/premium-vector/illustration-man-giving-thumbs-up_167995-949.jpg?w=740"
            alt="jokeimage"
            width="300px"
          ></img>

          {clicked && navigate("/GetAjoke")}
        </div>
        <div className="FunnyVideo">
          <h2> Funny Video </h2>
          <a href={randomFunnyVideo} target="_blank">
            <img
              src="https://img.freepik.com/free-vector/young-man-watching-concert-online-computer_74855-6442.jpg?w=900&t=st=1678174866~exp=1678175466~hmac=ad637833eafbb392f0903044b83db76e40e913f00586c19e56bc48fb4ff5a576"
              alt="funnyimg"
              width="300px"
            ></img>
          </a>
        </div>
        <div className="Memes-Section">
          <h2> Memes</h2>
          <img
            onClick={selectRandomMemes}
            src="https://img.freepik.com/free-vector/character-beautiful-woman-video-call-conference-with-lover_40876-2504.jpg?w=740&t=st=1678179171~exp=1678179771~hmac=f0a08cb467c904ec60841b692c26d4e54f529b305873620b51ace75285f2d24d"
            alt="memesimg"
            width="300px"
          ></img>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <img src={randomMemes} alt="Meme" />
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
