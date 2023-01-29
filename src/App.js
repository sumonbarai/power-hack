import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import router from "./router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
