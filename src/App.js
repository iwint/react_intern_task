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
        <Sidebar toggle={toggleSideBar} sideBar={sideBar} />
        <Topbar toggle={toggleSideBar} sideBar={sideBar} />

        <Routes>
          <Route path="/promocodes" exact component={PromocodeForm} />
          <Route path="/" exact component={OtherPages} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
