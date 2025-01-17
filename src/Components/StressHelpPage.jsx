import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StressHelpPage.css";
import ModalBox from "./ModalBox";

export default function StressHelpPage() {
  let navigate = useNavigate();
  const [randomYogaVideo, setRandomYogaVideo] = useState("");
  const [randomRecipes, setrandomRecipes] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalParaghrph, setmodalParaghrph] = useState("");

  const [showTherapistSection, setShowTherapistSection] = useState(false);
  const [showCalmMusicSectionSection, setshowCalmMusicSectionSection] =
    useState(false);
  const [showPracticeCare, setshowPracticeCare] = useState(false);
  const [showCookingSection, setshowCookingSection] = useState(false);
  const [SowhVideo, setShowVideo] = useState(false);

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

    setModalMessage(Books[randomIndex]);
    setIsModalOpen(true);
    setmodalParaghrph("Books to Read");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowTherapistSection(false);
    setShowTherapistSection(true);

    console.log(showTherapistSection);
  };

  const closeModelTH = () => {
    setIsModalOpen(false);
    setshowCalmMusicSectionSection(true);
    setshowPracticeCare(true);
    setshowCookingSection(true);
  };
  const YesModelBook = () => {
    setShowTherapistSection(false);
  };

  const YesModelTHeraapist = () => {
    setshowCalmMusicSectionSection(false);
    setshowPracticeCare(false);
    setshowCookingSection(false);
  };

  const selectRandomTherapist = () => {
    const randomIndex = Math.floor(Math.random() * Therapist.length);

    setModalMessage(Therapist[randomIndex]);
    setIsModalOpen(true);
    setmodalParaghrph("Suggested THerapist Near");
  };

  const selectRandomRecipes = () => {
    const randomIndex = Math.floor(Math.random() * Therapist.length);
    setrandomRecipes(CookRecipes[randomIndex]);
  };

  useEffect(() => {
    selectRandomRecipes();
  }, []);

  const CalmMusic = () => {
    setShowVideo(true);
  };

  return (
    <>
      <h1 className="stress-tittle">
        Here we have several steps that may help you reduce stress
      </h1>
      <div className="img-countainer">
        <div className="YogaSection">
          <h2> Yoga and Meditation </h2>

          <p className="click"> click on the pic to start the exercise </p>
          <a href={randomYogaVideo} target="_blank">
            <img
              src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=740&t=st=1677949131~exp=1677949731~hmac=59acbcb9fdf8a67af5ef65cc6cb8360ef91f3ed0f1bfe7a1750ea6004bfb788d"
              alt="yoga img"
            ></img>
          </a>
        </div>

        {/* book suggestion section  */}
        <div className="BookSection">
          <h2> Suggested Book To Read </h2>
          <img
            onClick={selectRandomBooks}
            src="https://img.freepik.com/free-vector/book-lover-concept-illustration_114360-1067.jpg?w=740&t=st=1677949710~exp=1677950310~hmac=374d21c58889c7e01a271ba34638a8d42adb537a83968639d779a2f3b7eb1077"
            alt="bookimg"
          ></img>
          {isModalOpen && (
            <ModalBox
              message={modalMessage}
              isOpen={isModalOpen}
              closeModal={closeModal}
              yesModel={YesModelBook}
              paragraph={modalParaghrph}
            />
          )}
        </div>
        {/* Therapist-Section */}

        <div
          className={
            showTherapistSection
              ? "Therapist-Section show"
              : "Therapist-Section"
          }
        >
          <h2> Suggestions for therapist in the area</h2>
          <img
            onClick={selectRandomTherapist}
            src="https://img.freepik.com/free-vector/psychologist-concept-illustration_114360-2040.jpg?w=996&t=st=1678355293~exp=1678355893~hmac=0ac0bda81259648d78f95fa6a91a402b939c98b95d8bd526a2af3b6f8611aa19"
            alt="therapistimg"
          ></img>
          {isModalOpen && (
            <ModalBox
              message={modalMessage}
              isOpen={isModalOpen}
              closeModal={closeModelTH}
              yesModel={YesModelTHeraapist}
              paragraph={modalParaghrph}
            />
          )}
        </div>

        {/* calm Music */}

        <div
          className={
            showCalmMusicSectionSection
              ? "calmMusic-section show"
              : "calmMusic-section"
          }
        >
          <h2> Calm Music</h2>
          <img
            onClick={CalmMusic}
            src="https://img.freepik.com/free-vector/man-enjoying-beautiful-music-indoors_23-2148538051.jpg?w=740&t=st=1678135278~exp=1678135878~hmac=79c7c3f45f085a8528ae950a7dee2f4b82c25b83754c3bcbac0efbd39e7c067d"
          ></img>
          {SowhVideo && (
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/krcseLp4Az0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>

        {/* self Care section */}

        <div
          className={
            showCookingSection ? " cooking-Section show " : "cooking-Section"
          }
        >
          <h2>lets do some cooking</h2>
          <p style={{ textAlign: "center" }}>
            Suggested Recipes :{randomRecipes.name}
          </p>
          <a href={randomRecipes.href} target="_blank">
            <img
              style={{ marginTop: "20%" }}
              onClick={selectRandomRecipes}
              src="https://img.freepik.com/premium-vector/vector-illustration-women-cooking-minimalist-style-woman-cooking_469123-533.jpg?w=1380"
              alt="cookingimg"
            ></img>
          </a>
        </div>
        <div
          className={
            showPracticeCare ? " calmMusic-section show" : "SelfCare-section"
          }
        >
          <h2> Practice Self Care</h2>
          <img
            onClick={() => {
              navigate("/PracticeSelfCare");
            }}
            src="https://img.freepik.com/free-vector/self-care-health-concept_23-2148517202.jpg?w=740&t=st=1678135195~exp=1678135795~hmac=dabc30d988644be4525a84e8f0183da80cb230a7852cda06f104b09a9890ddc2"
            alt="selfcareimg"
          ></img>
        </div>
      </div>
    </>
  );
}
