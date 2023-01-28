import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./layout/Main";
import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
