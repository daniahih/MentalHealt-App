import { useState } from "react";
import GetAjoke from "./GetAjoke";
import { useNavigate } from "react-router-dom";
import MemesPage from "./memesPage";
import "./SadHelpPage.css";
export default function SadHelpPage() {
  const [clicked, setClicked] = useState(false);
  let navigate = useNavigate();
  const [memesClicked, setMemesClicked] = useState(false);
  function backtoHomePage() {
    return navigate("/");
  }

  return (
    <>
      <h1>hello from sad help page</h1>
      <p>"I'm here for you and I want to support you in any way I can."</p>
      <button onClick={() => setClicked(true)}>Tell me A joke </button>
      {clicked && navigate("/GetAjoke")}
      <button id="FunnyVideo">
        <a href="https://www.youtube.com/watch?v=GOysW6WYWoE">funny Video</a>
      </button>
      <button onClick={() => setMemesClicked(true)}> Memes </button>
      {memesClicked && <MemesPage />}
      <button onClick={backtoHomePage}> Back to the home page </button>
    </>
  );
}
