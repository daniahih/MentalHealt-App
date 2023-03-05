import "./Home.css";
export default function HomePage() {
  return (
    <div style={{ display: "flex", gap: -10 }}>
      <section id="main"></section>
      <section id="hero">
        <div className="hero-title">
          <span className="span-1"> Make your </span>
          <span className="span-2"> MENTAL</span>
          <span className="span-3"> HEALTH </span>
          <span className="span-4"> a Priority</span>
        </div>
        <button className="get-started-btn"> Get Started </button>
      </section>
    </div>
  );
}
