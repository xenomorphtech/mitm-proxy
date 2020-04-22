import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";

import SaveIcon from "@material-ui/icons/Save";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import ClearIcon from "@material-ui/icons/Clear";
import { sampleStore } from "./../../../__Mocks__/Data/File";
import { SESSION_UPLOAD_NODE_ID } from "./../../../Constants/Misc";

const NavBarItems = (props) => {

  const { isMobile, saveStore, setStore } = props;

  const openFilePicker = () => window[SESSION_UPLOAD_NODE_ID].click();

  const resetStore = () => setStore(sampleStore);

  const navBarItems = [
    {
      icon: <ClearIcon />,
      label: "Clear Session",
      onClick: resetStore
    },
    {
      icon: <SaveIcon />,
      label: "Save Session",
      onClick: saveStore
    },
    {
      icon: <OpenInBrowserIcon />,
      label: "Upload Session",
      onClick: openFilePicker
    }
  ];

  const makeNavBarItems = (items, isMobile) => items.map(({ onClick, badgeCount = 0, icon, label }) => {
    const button = (
      <IconButton onClick={isMobile ? undefined : onClick} color="inherit">
        <Badge badgeContent={badgeCount} color="secondary">
          {icon}
        </Badge>
      </IconButton>
    );
    const view = <>
      {isMobile ? button : <Tooltip title={label}>{button}</Tooltip>}&nbsp;
      {isMobile ? <p>{label}</p> : <></>}
    </>;
    return isMobile ? <MenuItem onClick={onClick}>{view}</MenuItem> : view;
  });

  return <>
    {makeNavBarItems(navBarItems, isMobile)}
  </>;
};

NavBarItems.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  setStore: PropTypes.func.isRequired,
  saveStore: PropTypes.func.isRequired
};

export default NavBarItems;