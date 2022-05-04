import React from "react";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function SubMenu({ data }) {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <li className="submenu" key={index}>
            <NavItem className="submenu-items" tag={Link} to={item.path}>
              {item.name}
            </NavItem>
          </li>
        );
      })}
    </div>
  );
}

export default SubMenu;
