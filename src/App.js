import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Root";
import HomePage from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import GetStarted from "./Components/GetStarted";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import EmotionsPage from "./Components/EmotionsPage";
import SadHelpPage from "./Components/SadHelpPage";
import StressHelpPage from "./Components/StressHelpPage";
import ShyHelpPage from "./Components/ShyHelpPage";
import HappyHelpPage from "./Components/HappyHelpPage";
import GetAjoke from "./Components/GetAjoke";
import PracticeSelfCare from "./Components/PracticeSelfCare";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/GetStarted",
        element: <GetStarted />,
      },
      {
        path: "/emotionpage",
        element: <EmotionsPage />,
      },
      { path: "/StressHelpPage", element: <StressHelpPage /> },
      { path: "LoginPage", element: <LoginPage /> },
    ],
  },

  { path: "/RegisterPage", element: <RegisterPage /> },
  { path: "/SadHelpPage", element: <SadHelpPage /> },
  { path: "/ShyHelpPage", element: <ShyHelpPage /> },
  { path: "/HappyHelpPage", element: <HappyHelpPage /> },
  { path: "/GetAjoke", element: <GetAjoke /> },
  { path: "/PracticeSelfCare", element: <PracticeSelfCare /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
