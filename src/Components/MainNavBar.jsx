import { Link } from "react-router-dom";
import "./MainNavbar.css";
const MainNavBar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/AboutUs "> About Us</Link>
          </li>
          <li>
            <Link to="/GetStarted"> GetStarted</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
