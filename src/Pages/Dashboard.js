import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Layout from '../Components/Layout';
import { data } from '../__Mocks__/Data/Hex';
import { chunk } from 'lodash';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();

  const quantum = 4;
  const offset = 16;

  const packets = [1,2,3,4,5,6,7,8,9,0].map((v) => {
    const len = parseInt((Math.random() * 100) / quantum) * quantum;
    const str = data.hex.split(" ").slice(len, len + len);
    return { 
      len, 
      str,
      offset,
      quantum
    };
  });

  return (
    <Layout title="Dashboard">
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          {packets.map((({len, str, offset, quantum}) => (
            <>
              Length: {len}
              <Typography style={{ fontFamily: "fira code" }}>
                {chunk(str, offset).map((v) => (
                  <>
                    {chunk(v, quantum).map((e) => (
                      <>&nbsp; &nbsp; {e.join(" ").toUpperCase()}</>
                    ))}
                    <br />
                  </>
                ))}
              </Typography>
            </>
          )))}
        </Typography>
      </main>
      </Layout>
  );
}