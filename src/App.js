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
        <div className="App">
          <Sidebar toggle={toggleSideBar} sideBar={sideBar} />
          <Topbar toggle={toggleSideBar} sideBar={sideBar} />

          <Routes>
            <Route exact path="/promocodes" element={<PromocodeForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
