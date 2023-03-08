import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  let navigate = useNavigate();
  navigate("/RegisterPage");

  // since this component is not rendering any elements, you can return null here.
}
