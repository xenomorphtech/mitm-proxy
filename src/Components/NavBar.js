import React, { useState } from "react";
import clsx from "clsx";
import { withRouter } from "react-router";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ChevronRight, ChevronLeft, Mail, Notifications, AccountCircle, More, ExitToApp } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Divider, Badge, IconButton, Menu, MenuItem, Box, Grid } from "@material-ui/core";

import { LINKS } from "../Constants/Roles";
import { connect } from "react-redux";
import { resetUser } from "./../Redux/Actions/Auth";
import { resetUserDetails } from "../Utils/LocalStorage";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const NavBar = (props) => {
  const { title, role, user, history, resetUser} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sideList = (
    LINKS.filter(({ roles }) => roles.includes(role)).map(({ label, href, icon }) => (
      <ListItem button key={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    ))
  );

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMobileMenuClose = (e) => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = (e) => {
    handleMenuClose();
    // resetting localStorage
    resetUserDetails();
    // resetting ReduxStore
    resetUser();
    // routing to Login Page
    history.push("/");
  };

  const navBarItems = [
    {
      badgeCount: 4,
      icon: <Mail />,
      label: "Mail"
    },
    {
      badgeCount: 8,
      icon: <Notifications />,
      label: "Notifications"
    }
  ];

  const menuItems = [
    {
      onClick: () => ({}),
      icon: <AccountCircle />,
      label: "Profile"
    },
    {
      onClick: handleLogOut,
      icon: <ExitToApp />,
      label: "Log Out"
    }
  ];

  const makeNavBarItems = (items, isMobile) => items.map(({ badgeCount, icon, label }) => {
    const view = <>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={badgeCount} color="secondary">
          {icon}
        </Badge>
      </IconButton>
      {isMobile ? <p>{label}</p> : <></>}
    </>;
    return isMobile ? <MenuItem>{view}</MenuItem> : view;
  });

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

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={'primary-search-account-menu'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      {makeMenuItems(menuItems, false)}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={'primary-search-account-menu-mobile'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      {makeNavBarItems(navBarItems, true)}
      {user ? makeMenuItems(menuItems, true) : <></>}
    </Menu>
  );


  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {makeNavBarItems(navBarItems, false)}
            {user ? <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> : <></>}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <More />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideList}
        </List>
      </Drawer>
      {renderMenu}
      {renderMobileMenu}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps, {
  resetUser
})(withRouter(NavBar));