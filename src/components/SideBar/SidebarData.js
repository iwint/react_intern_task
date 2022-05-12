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
        path: "/otherpages",
      },
    ],
  },
  {
    name: "Users",
    icon: <FaIcons.FaUserCircle />,

    submenu: [
      {
        name: "None",
        path: "/otherpages",
      },
    ],
  },
  {
    name: "Drivers",
    icon: <FaIcons.FaUserAlt />,

    submenu: [
      {
        name: "Overview",
        path: "/overview",
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
        path: "/",
      },
      {
        name: "Referral",
        path: "/otherpages",
      },
      {
        name: "Banners",
        path: "/otherpages",
      },
    ],
  },
  {
    name: "Dynamic Pricing",
    icon: <SiIcons.SiCodeforces />,

    submenu: [
      {
        name: "None",
        path: "/otherpages",
      },
    ],
  },
  {
    name: "Settings",
    icon: <IoIcons.IoMdSettings />,

    submenu: [
      {
        name: "None",
        path: "/otherpages",
      },
    ],
  },
  {
    name: "Feedbacks",
    icon: <RiIcons.RiQuestionnaireFill />,
    path: "/otherpages",
  },
  {
    name: "Chat Support",
    icon: <RiIcons.RiQuestionnaireFill />,
    path: "/otherpages",
  },
  {
    name: "Logout",
    icon: <RiIcons.RiLogoutBoxFill />,
    path: "/",
    class: "logout",
  },
];

export default SideBarData;
