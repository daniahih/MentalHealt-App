import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Root";
import HomePage from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import GetStarted from "./Components/GetStarted";
import RegisterPage from "./Components/RegisterPage";

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
      { path: "/RegisterPage", element: <RegisterPage /> },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
