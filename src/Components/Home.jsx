import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", gap: -10 }}>
        <section id="main"></section>
        <section id="hero">
          <div className="hero-title">
            <span className="span-1"> Make your </span>
            <span className="span-2"> MENTAL</span>
            <span className="span-3"> HEALTH </span>
            <span className="span-4"> a Priority</span>
          </div>
          <button
            className="get-started-btn"
            onClick={(e) => {
              navigate("/RegisterPage");
            }}
          >
            Get Started
          </button>
        </section>
      </div>
      <br></br>
      <section id="banner">
        <div className="banner-box">
          <div className="banner-1">
            <img
              src="https://img.freepik.com/premium-vector/strong-powerful-brain-holding-heavy-barbell_74669-429.jpg?w=740"
              alt="brain-img"
            ></img>
            <p>
              You are not Alone
              <br></br>
              <br></br>
              <br></br>
              <span>
                The brain is a muscle. The more you use it, the stronger it gets
              </span>
            </p>
          </div>
        </div>
        <div className="banner-box">
          <div className="banner-1">
            <img
              src="https://img.freepik.com/premium-vector/young-man-sits-lotus-position-meditating-home-concept-yoga-meditation-relax-health-benefits-body-mind-emotions-flat-illustration_222438-24.jpg"
              alt="brain-img"
            ></img>
            <p>
              Change Your Life Style
              <br></br>
              <br></br>
              <br></br>
              <span>
                Your brain is the most powerful tool you have. Use it to change
                your life.
              </span>
            </p>
          </div>
        </div>
      </section>
      <br></br>
    </>
  );
}
