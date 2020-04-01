export const CREATE = "Add";
export const UPDATE = "Edit";

export const USER = "USER";

export const LINKS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "Menu",
    roles: [USER],
    show: {
      header: false,
      drawer: true
    }
  }
];