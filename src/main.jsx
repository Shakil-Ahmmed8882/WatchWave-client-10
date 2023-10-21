import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Styles/global.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routers";
import AuthProvider from "./🟢 AuthProvider/AuthProvider";


// testing some more
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
