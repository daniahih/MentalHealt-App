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
      <a href="https://www.youtube.com/watch?v=GOysW6WYWoE">
        <img
          src="https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147839964.jpg?w=740&t=st=1678007512~exp=1678008112~hmac=5bfd8423e931291bf3888ad8ed9ea2fbe17805aff48e8649586efd57afd389e0"
          width="300px"
        />
      </a>
      <img
        onClick={() => setClicked(true)}
        src="https://img.freepik.com/free-vector/group-people-watching-funny-video-laughing-cartoon_1284-33366.jpg?w=996&t=st=1678006851~exp=1678007451~hmac=f8595307982e2e02a40d841c0949d56aa717b8ec9dcfec69cac098a86ed3b96f"
        alt="jokeimg"
        width="300px"
      ></img>
      {/* <button onClick={() => setClicked(true)}> Tell me a Joke </button> */}
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
