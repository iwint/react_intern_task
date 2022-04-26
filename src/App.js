import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

import Topbar from "./components/Topbar/Topbar";
import OtherPages from "./pages/OtherPages";
import Sidebar from "./components/SideBar/Sidebar";
import PromocodeForm from "./pages/Form/PromocodeForm";

function App() {
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => setSideBar(!sideBar);
  // alert("Clicked");

  return (
    <>
      <Router>
<<<<<<< HEAD
        <div className="App">
          <Sidebar toggle={toggleSideBar} sideBar={sideBar} />
          <Topbar toggle={toggleSideBar} sideBar={sideBar} />
=======
<<<<<<< HEAD
        <div className="App-wrapper d-flex px-0">
          <Sidebar toggleSideBar={toggleSideBar} sideBar={sideBar} />
          <Topbar toggleSideBar={toggleSideBar} sideBar={sideBar} />
        </div>
=======
        <div className="App">
          <Sidebar toggle={toggleSideBar} sideBar={sideBar} />
          <Topbar toggle={toggleSideBar} sideBar={sideBar} />
>>>>>>> 92e8dd54ac197e15d9c7a8e20f2489e2444b9880
>>>>>>> 383678f4a2d4a04bb721315757929b9712c23518

          <Routes>
            <Route exact path="/promocodes" element={<PromocodeForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
