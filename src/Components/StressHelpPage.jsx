import { useState, useEffect } from "react";

export default function StressHelpPage() {
  const [randomYogaVideo, setRandomYogaVideo] = useState("");
  const [randomBook, setRandomBook] = useState("");

  // array of yoga video links
  const yogaVideos = [
    "https://www.youtube.com/watch?v=v7AYKMP6rOE",
    "https://www.youtube.com/watch?v=8TuRYV71Rgo",
    "https://www.youtube.com/watch?v=hJbRpHZr_d0",
    "https://www.youtube.com/watch?v=4pLUleLdwY4",
    "https://www.youtube.com/watch?v=nqIAKW92TBM",
  ];

  const Books = [
    "The Anxiety and Phobia Workbook",
    "The Power of Now",
    "The Miracle of Mindfulness",
    "The Tao of Pooh",
    "The Art of Possibility",
    "The Happiness Advantage",
    "The Alchemist ",
    "Meditation for Fidgety Skeptics",
  ];

  // function to select a random yoga video
  const selectRandomYogaVideo = () => {
    const randomIndex = Math.floor(Math.random() * yogaVideos.length);
    setRandomYogaVideo(yogaVideos[randomIndex]);
  };

  useEffect(() => {
    selectRandomYogaVideo();
  }, []);
  const selectRandomBooks = () => {
    const randomIndex = Math.floor(Math.random() * Books.length);
    setRandomBook(Books[randomIndex]);
  };

  useEffect(() => {
    selectRandomBooks();
  }, []);
  const ImgClick = (event) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log("Image clicked");
    return <></>;
  };

  return (
    <>
      <h1>hello from stress help page</h1>
      <ul>
        <li>
          meditation or yoga exercises
          <img
            src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=740&t=st=1677949131~exp=1677949731~hmac=59acbcb9fdf8a67af5ef65cc6cb8360ef91f3ed0f1bfe7a1750ea6004bfb788d"
            alt="yoga img"
            width="300px"
          ></img>
          <button>
            <a href={randomYogaVideo}>Yoga exercises</a>
          </button>
        </li>
        <li>suggested books to read : {randomBook}</li>
        <img
          src="https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1067.jpg?w=740&t=st=1677949710~exp=1677950310~hmac=374d21c58889c7e01a271ba34638a8d42adb537a83968639d779a2f3b7eb1077"
          alt="bookimg"
        ></img>
        <li>therapist they can contact with them</li>

        <li>Calm Music</li>
        <img
          onClick={ImgClick}
          src="https://www.shutterstock.com/image-vector/woman-doing-yoga-listening-music-260nw-1726817410.jpg"
          alt="calm music"
        />

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
