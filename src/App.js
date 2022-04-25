import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import PromocodeForm from "./pages/Form/PromocodeForm";

import Topbar from "./components/Topbar/Topbar";
import OtherPages from "./pages/OtherPages";
import Sidebar from "./components/SideBar/Sidebar";
function App() {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <Router>
        <div className="App-wrapper d-flex px-0">
          <Sidebar toggleSideBar={toggleSideBar} sideBar={sideBar} />
          <Topbar toggleSideBar={toggleSideBar} sideBar={sideBar} />
        </div>

        <Routes>
          <Route path="/promocodes" exact component={PromocodeForm} />
          <Route path="/" exact component={OtherPages} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
