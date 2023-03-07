import { useNavigate } from "react-router-dom";
import "./ModalBox.css";

export default function ModalBox({
  message,
  isOpen,
  closeModal,
  yesModel,
  paragraph,
}) {
  let navigate = useNavigate();
  const handleClose = () => {
    closeModal(false);
    navigate("/StressHelpPage");
  };
  const HandelYes = () => {
    closeModal(false);
    yesModel();
    alert("we are always here to help you");
    navigate("/StressHelpPage");
  };

  return (
    <div
      className={
        isOpen ? "modal-container-Stress active" : "modal-container-Stress"
      }
    >
      <div className="modal-content-Stress">
        <p> {paragraph}</p>
        <h2>{message}</h2>
        <p>Was this helpful?</p>

        <button onClick={HandelYes}>Yes</button>
        <button onClick={handleClose}> No</button>
      </div>
    </div>
  );
}
