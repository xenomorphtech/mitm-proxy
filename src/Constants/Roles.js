import React from "react";
import { Dashboard, Forum } from "@material-ui/icons";

export const CREATE = "Add";
export const UPDATE = "Edit";

export const USER = "USER";

export const LINKS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <Dashboard />,
    roles: [USER],
    show: {
      header: false,
      drawer: true
    }
  },
  {
    label: "Communication",
    href: "/communication",
    icon: <Forum />,
    roles: [USER],
    show: {
      header: false,
      drawer: true
    }
  }
];