import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Tasks from "./components/Tasks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* aqui seria mostra com dados de api mocado */}
    <Tasks />
  </React.StrictMode>
);
