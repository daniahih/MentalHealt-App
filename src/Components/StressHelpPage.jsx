import { useState } from "react";
import GetAjoke from "./GetAjoke";
// import MemesPage from "./memesPage";

export default function StressHelpPage() {
  const [clicked, setClicked] = useState(false);
  // const [memesClicked, setMemesClicked] = useState(false);

  return (
    <>
      <h1>hello from stress help page</h1>
      <button onClick={() => setClicked(true)}> Tell me a Joke </button>
      <button>
        <a href="https://www.youtube.com/watch?v=hJbRpHZr_d0">
          do this exercies
        </a>
      </button>
      <button> Back to the home page </button>
      {/* <button onClick={() => setMemesClicked(true)}> Memes </button> */}
      {clicked && <GetAjoke />}
      {/* {memesClicked && <MemesPage />} */}
    </>
  );
}
