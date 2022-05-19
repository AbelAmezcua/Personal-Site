import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Nav, NavbarContainerLeft, NavbarContainerRight, Navlogo, MobileIcon, NavItem, NavLinks, NavMenu } from "./NavbarElements";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainerLeft>
            <Navlogo to="/">Hi, I'm Abel</Navlogo>
          </NavbarContainerLeft>
          <NavbarContainerRight>
            <MobileIcon>
              <FaIcons.FaBars onClick={showSidebar} />
            </MobileIcon>

            {window.location.href.indexOf("projects") > -1 || window.location.href.indexOf("contact") > -1 ? (
              <NavMenu />
            ) : (
              <NavMenu>
                <NavItem>
                  <NavLinks to="about">About Me</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="what">What I do</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="current">Currently working on</NavLinks>
                </NavItem>
              </NavMenu>
            )}
          </NavbarContainerRight>
        </Nav>
        {/* <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
