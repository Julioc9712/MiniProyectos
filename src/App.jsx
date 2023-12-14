import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./router/Home";
import Roadmap from "./router/Roadmap";
import WeatherApi from "./router/WeatherApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Roadmap",
    element: <Roadmap />,
  },
  {
    path: "/Weather",
    element: <WeatherApi />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
