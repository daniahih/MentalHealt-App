import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StressHelpPage.css";

export default function StressHelpPage() {
  let navigate = useNavigate();
  const [randomYogaVideo, setRandomYogaVideo] = useState("");
  const [randomBook, setRandomBook] = useState("");
  const [randomTherapist, setrandomTherapist] = useState("");
  const [randomRecipes, setrandomRecipes] = useState("");

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

  const Therapist = [
    "Gilad Dayan",
    " Mrs Deborah Shlider MSW",
    "Laura Joseph Integrative",
  ];
  const CookRecipes = [
    {
      name: "Oreo Truffles",
      href: "https://www.delish.com/cooking/recipe-ideas/recipes/a48823/oreo-truffles-recipe/",
    },
    {
      name: "Thumbprint Cookies",
      href: "https://www.delish.com/cooking/recipe-ideas/a56358/easy-jam-thumbprint-cookies/",
    },
    {
      name: "Chocolate Bundt Cake",
      href: "https://www.delish.com/cooking/recipe-ideas/a42943517/chocolate-bundt-cake-recipe/",
    },
    {
      name: "Bûche de Noël (Yule Log Cake)",
      href: "https://www.delish.com/cooking/recipe-ideas/a24276998/buche-de-noel-yule-log-cake-recipe/",
    },
    {
      name: "Gelato",
      href: "https://www.delish.com/cooking/recipe-ideas/a42680125/gelato-recipe/",
    },
    {
      name: "Chocolate Bundt Cake",
      href: "https://www.delish.com/cooking/recipe-ideas/a42943517/chocolate-bundt-cake-recipe/",
    },
    {
      name: " Strawberry Cheesecake Bars",
      href: "https://www.delish.com/cooking/recipe-ideas/a42818570/best-strawberry-cheesecake-bars-recipe/",
    },
    {
      name: " Baileys Chocolate Cream Pie",
      href: "https://www.delish.com/cooking/recipe-ideas/a42662411/baileys-chocolate-cream-pie-recipe/",
    },
  ];
  // function to select a random yoga video
  const selectRandomYogaVideo = () => {
    const randomIndex = Math.floor(Math.random() * yogaVideos.length);
    console.log("calrandomled", randomIndex);
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
  const selectRandomTherapist = () => {
    const randomIndex = Math.floor(Math.random() * Therapist.length);
    setrandomTherapist(Therapist[randomIndex]);
  };

  useEffect(() => {
    selectRandomTherapist();
  }, []);

  const selectRandomRecipes = () => {
    const randomIndex = Math.floor(Math.random() * Therapist.length);
    setrandomRecipes(CookRecipes[randomIndex]);
  };

  useEffect(() => {
    selectRandomRecipes();
  }, []);

  return (
    <>
      <h1>hello from stress help page</h1>
      <div className="YogaSection">
        <a href={randomYogaVideo} target="_blank">
          <img
            src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=740&t=st=1677949131~exp=1677949731~hmac=59acbcb9fdf8a67af5ef65cc6cb8360ef91f3ed0f1bfe7a1750ea6004bfb788d"
            alt="yoga img"
            width="300px"
          ></img>
        </a>
      </div>
      <div className="BookSection">
        <p>suggested books to read : {randomBook}</p>
        <img
          onClick={selectRandomBooks}
          src="https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1067.jpg?w=740&t=st=1677949710~exp=1677950310~hmac=374d21c58889c7e01a271ba34638a8d42adb537a83968639d779a2f3b7eb1077"
          alt="bookimg"
          width="300px"
        ></img>
      </div>
      <div className="Therapist-Section">
        <p>therapist they can contact with them:{randomTherapist}</p>
        <img
          onClick={selectRandomTherapist}
          src="https://img.freepik.com/free-vector/woman-visiting-psychologist_74855-4824.jpg?w=1380&t=st=1678022542~exp=1678023142~hmac=daf4485e3c9a566d344acce1c11c9bd16c702d9fe6f2d21eb382dade7cd35448"
          alt="therapistimg"
          width="300px"
        ></img>
      </div>
      <a href="https://www.youtube.com/watch?v=krcseLp4Az0" target="_blank">
        <img
          src="https://www.shutterstock.com/image-vector/woman-doing-yoga-listening-music-260nw-1726817410.jpg"
          alt="calm music"
        />
      </a>
      <img
        onClick={() => {
          navigate("/PracticeSelfCare");
        }}
        src="https://img.freepik.com/free-vector/hand-drawn-lagom-illustration_23-2149819877.jpg?w=900&t=st=1678023046~exp=1678023646~hmac=e7d22cb695f253b3510042973aa4f39aef9c311b68bc598d702bf27303eb03dc"
        alt="selfcareimg"
        width="300px"
      ></img>
      <p>lets do some cooking</p>
      <p>Lets do some Cooking :{randomRecipes.name}</p>
      <a href={randomRecipes.href} target="_blank">
        {" "}
        link to the Recipes{" "}
      </a>
      <img
        onClick={selectRandomRecipes}
        src="https://img.freepik.com/free-vector/set-people-cooking-their-favourite-food_52683-38224.jpg?w=996&t=st=1678023850~exp=1678024450~hmac=138e35b0b427ed126aa961dd9e93ca2efcac9a126ac0729a8eb9d8878b9edc1d"
        alt="cookingimg"
        width="300px"
      ></img>
    </>
  );
}
