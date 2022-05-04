import React, { useState } from "react";
import { NavItem, NavLink } from "reactstrap";
import * as FaIcons from "react-icons/fa";
import SubMenu from "./SubMenu";

const Menu = ({ data, listId, path, active, setactive }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setactive(() => {
      return listId;
    });
    setCollapsed(!collapsed);
  };

  return (
    <>
      <NavLink className={`menu ${listId === active ? "active" : ""}`}>
        <NavItem className="menu-items " onClick={toggle}>
          <div>
            <span>{data.icon}</span>
            <span className="mx-2">{data.name}</span>
          </div>

          <span>
            {collapsed && data.submenu ? (
              <FaIcons.FaAngleUp />
            ) : data.submenu ? (
              <FaIcons.FaAngleDown />
            ) : null}
          </span>
        </NavItem>
      </NavLink>
      {collapsed && data.submenu ? (
        <SubMenu data={data.submenu} active={active} setactive={setactive} />
      ) : null}
    </>
  );
};

export default Menu;
