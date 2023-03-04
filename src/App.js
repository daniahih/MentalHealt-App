import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Root";
import HomePage from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import GetStarted from "./Components/GetStarted";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import EmotionsPage from "./Components/EmotionsPage";

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
        path: "/loginPage",
        element: <LoginPage />,
      },
      {
        path: "/emotionpage",
        element: <EmotionsPage />,
      },
    ],
  },
  { path: "/RegisterPage", element: <RegisterPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
