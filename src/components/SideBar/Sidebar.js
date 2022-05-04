import { React, useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
// import { Link } from "react-router-dom";
import Data from "./SidebarData";

function Sidebar({ sideBar }) {
  const [active, setactive] = useState(0);

  return (
    <>
      {sideBar && (
        <Navbar
          style={{
            backgroundColor: "#ffffff",
            width: "250px",
            height: "100vh",
          }}
        >
          <NavbarBrand
            className="px-4 my-1"
            style={{ color: "#5735d2", fontWeight: "bold", fontSize: "20px" }}
          >
            <img
              src="/logo.png"
              alt=""
              style={{ width: "150px", height: "50px" }}
            />
            <hr style={{ width: "200px" }} />
          </NavbarBrand>

          {Data.map((item, index) => {
            return (
              <Menu
                data={item}
                key={index}
                active={active}
                setactive={setactive}
                listId={index}
                path={item.path}
              />
            );
          })}
        </Navbar>
      )}
    </>
  );
}

export default Sidebar;
