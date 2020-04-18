import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const MenuItems = (props) => {

  const { isMobile, handleLogOut } = props;

  const menuItems = [
    {
      onClick: () => ({}),
      icon: <AccountCircleIcon />,
      label: "Profile"
    },
    {
      onClick: handleLogOut,
      icon: <ExitToAppIcon />,
      label: "Log Out"
    }
  ];

  const makeMenuItems = (items, isMobile) => items.map(({ onClick, label, icon }) => {
    const view = isMobile ? <>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        children={icon}
      />
      <p>{label}</p>
    </> : label;
    return <MenuItem onClick={onClick}>{view}</MenuItem>;
  });

  return <>
    {makeMenuItems(menuItems, isMobile)}
  </>
};

MenuItems.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default MenuItems;