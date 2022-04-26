import { React, useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import SubMenu from "./SubMenu";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import Data from "./SidebarData";

function Sidebar({ sideBar }) {
  const [collapse, setCollapse] = useState(false);

  const toggleDropdown = () => setCollapse(!collapse);

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
            className="px-3 my-2"
            style={{ color: "#5735d2", fontWeight: "bold", fontSize: "20px" }}
          >
            <img
              src="/logo.png"
              alt=""
              style={{ width: "150px", height: "50px" }}
            />
            <hr style={{ width: "200px" }} />
          </NavbarBrand>
        </Navbar>
      )}
    </>
  );
}

export default Sidebar;

// const SideBar = ({ isOpen, toggle }) => (
//   <div className={classNames("sidebar", { "is-open": isOpen })}>
//     <div className="sidebar-header">
//       <span color="info" onClick={toggle} style={{ color: "#fff" }}>
//         &times;
//       </span>
//       <h3>Bootstrap Sidebar</h3>
//     </div>
//     <div className="side-menu">
//       <Nav vertical className="list-unstyled pb-3">
//         <p>Dummy Heading</p>
//         <SubMenu title="Home" icon={faHome} items={submenus[0]} />
//         <NavItem>
//           <NavLink tag={Link} to={"/about"}>
//             <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
//             About
//           </NavLink>
//         </NavItem>
//         <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
//         <NavItem>
//           <NavLink tag={Link} to={"/pages"}>
//             <FontAwesomeIcon icon={faImage} className="mr-2" />
//             Portfolio
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to={"/faq"}>
//             <FontAwesomeIcon icon={faQuestion} className="mr-2" />
//             FAQ
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink tag={Link} to={"/contact"}>
//             <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
//             Contact
//           </NavLink>
//         </NavItem>
//       </Nav>
//     </div>
//   </div>
// );

// export default SideBar;