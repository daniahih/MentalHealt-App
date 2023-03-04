import { useState } from "react";
import GetAjoke from "./GetAjoke";
import { useNavigate } from "react-router-dom";
import MemesPage from "./memesPage";

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
      <p>
        I'm sorry to hear that you're feeling sad. Would you like to talk about
        what's been going on?
      </p>
      <textarea rows="4" cols="50"></textarea>
      <p>"I'm here for you and I want to support you in any way I can."</p>
      <button onClick={() => setClicked(true)}> Tell me a Joke </button>
      <button>
        <a href="https://www.youtube.com/watch?v=GOysW6WYWoE">
          watch funny video
        </a>
      </button>

      <button onClick={() => setMemesClicked(true)}> Memes </button>
      <button onClick={backtoHomePage}> Back to the home page </button>
      {clicked && <GetAjoke />}
      {memesClicked && <MemesPage />}
    </>
  );
}
