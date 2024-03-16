import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
//import Sidebar from "./pages/Sidebar/Sidebar.jsx";
import "./index.css";
import Sidebar from "./pages/Sidebar/Sidebar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    < Dashboard />
  </React.StrictMode>,
)
