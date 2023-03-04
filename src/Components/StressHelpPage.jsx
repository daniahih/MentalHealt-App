import { useState, useEffect } from "react";

export default function StressHelpPage() {
  const [randomYogaVideo, setRandomYogaVideo] = useState("");

  // array of yoga video links
  const yogaVideos = [
    "https://www.youtube.com/watch?v=v7AYKMP6rOE",
    "https://www.youtube.com/watch?v=8TuRYV71Rgo",
    "https://www.youtube.com/watch?v=hJbRpHZr_d0",
    "https://www.youtube.com/watch?v=4pLUleLdwY4",
    "https://www.youtube.com/watch?v=nqIAKW92TBM",
  ];

  // function to select a random yoga video
  const selectRandomYogaVideo = () => {
    const randomIndex = Math.floor(Math.random() * yogaVideos.length);
    setRandomYogaVideo(yogaVideos[randomIndex]);
  };

  useEffect(() => {
    selectRandomYogaVideo();
  }, []);

  return (
    <>
      <h1>hello from stress help page</h1>
      <ul>
        <li>
          meditation or yoga exercises{" "}
          <button>
            <a href={randomYogaVideo}>Yoga exercises</a>
          </button>
        </li>
        <li>suggested books to read</li>
        <li>therapist they can contact with them</li>
        <li>calm music</li>
        <li>
          Practice self-care
          <ul>
            <li>going for a walk outside</li>
            <li>taking a bath</li>
            <li>getting a massage</li>
            <li>practicing a hobby</li>
          </ul>
        </li>
        <li>cooking (and need to fetch data from api)</li>
      </ul>
    </>
  );
}
