import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar((p) => !p);
  };

  return (
    <>
      <Router>
        <div className="App-wrapper d-flex px-0">
          <Sidebar toggle={toggleSideBar} sideBar={sideBar} />
          <Topbar toggle={toggleSideBar} sideBar={sideBar} />
        </div>
      </Router>
    </>
  );
}

export default App;
