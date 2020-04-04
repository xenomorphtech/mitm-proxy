import React from "react";
import { Dashboard } from "@material-ui/icons";

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
  }
];