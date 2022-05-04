import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import Topbar from "./components/Topbar/Topbar";
import OtherPages from "./pages/OtherPages";
import Sidebar from "./components/SideBar/Sidebar";
import PromocodeForm from "./pages/Form/PromocodeForm";
import { Col } from "reactstrap";

function App() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => setSideBar(!sideBar);

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
