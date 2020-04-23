import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ForumIcon from "@material-ui/icons/Forum";

export const CREATE = "Add";
export const UPDATE = "Edit";

export const USER = "USER";

export const LINKS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
    roles: [USER],
    show: {
      header: false,
      drawer: true
    }
  },
  {
    label: "Communication",
    href: "/communication",
    icon: <ForumIcon />,
    roles: [USER],
    show: {
      header: false,
      drawer: true
    }
  }
];