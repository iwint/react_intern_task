import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

const SideBarData = [
  {
    name: "Dashboard",
    icon: <RiIcons.RiDashboardFill />,
    path: "/",
  },
  {
    name: "Rides",
    icon: <IoIcons.IoIosNavigate />,

    submenu: [
      {
        name: "None",
        path: "/",
      },
    ],
  },
  {
    name: "Users",
    icon: <FaIcons.FaUserCircle />,

    submenu: [
      {
        name: "None",
        path: "/",
      },
    ],
  },
  {
    name: "Drivers",
    icon: <FaIcons.FaUserAlt />,

    submenu: [
      {
        name: "None",
        path: "/",
      },
    ],
  },
  {
    name: "Monetization",
    icon: <SiIcons.SiCodeforces />,
    path: "/",
  },
  {
    name: "Promotions",
    icon: <FaIcons.FaPercentage />,

    submenu: [
      {
        name: "Promocodes",
        path: "/promocodes",
      },
      {
        name: "Referral",
        path: "/",
      },
      {
        name: "Banners",
        path: "/",
      },
    ],
  },
  {
    name: "Dynamic Pricing",
    icon: <SiIcons.SiCodeforces />,

    submenu: [
      {
        name: "None",
        path: "/",
      },
    ],
  },
  {
    name: "Settings",
    icon: <IoIcons.IoMdSettings />,

    submenu: [
      {
        name: "None",
        path: "/",
      },
    ],
  },
  {
    name: "Feedbacks",
    icon: <RiIcons.RiQuestionnaireFill />,
    path: "/",
  },
  {
    name: "Chat Support",
    icon: <RiIcons.RiQuestionnaireFill />,
    path: "/",
  },
  {
    name: "Logout",
    icon: <RiIcons.RiLogoutBoxFill />,
    path: "/",
    class: "logout",
  },
];

export default SideBarData;
