import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/Personal-Site",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/Personal-Site/projects",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Contact Me",
    path: "/Personal-Site/contact",
    icon: <AiIcons.AiOutlineMail />,
    cName: "nav-text",
  },
];
