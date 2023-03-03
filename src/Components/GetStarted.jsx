import { Link } from "react-router-dom";
export default function GetStarted() {
  return (
    <>
      <h1>hello from GetStarted page</h1>
      <p>lets register your name to see how we can help you</p>

      <Link to="/RegisterPage"> register page </Link>
    </>
  );
}
