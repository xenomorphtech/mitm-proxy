import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, blueGrey } from "@material-ui/core/colors";

const shade = "900";

const getColor = (i) => ({
  0: red[shade],
  1: pink[shade],
  2: purple[shade],
  3: deepPurple[shade],
  4: indigo[shade],
  5: lightBlue[shade],
  6: cyan[shade],
  7: teal[shade],
  8: green[shade],
  9: lightGreen[shade],
  10: lime[shade],
  11: yellow[shade],
  12: amber[shade],
  13: orange[shade],
  14: deepOrange[shade],
  15: brown[shade],
  16: blueGrey[shade]
}[i]);

const useStyles = makeStyles((theme) => ({
  leftSide: {
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(2),
    display: "flex",
    flexGrow: 1,
    flexDirection: "row"
  },
  rightSide: {
    textAlign: "right",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    display: "flex",
    flexGrow: 1,
    flexDirection: "row-reverse"
  },
  timeStamp: {
    margin: "3px 0 0 0",
    fontSize: "0.6rem"
  }
}));

const Message = (props) => {
  const classes = useStyles();

  const { mine, userDetails, contentDetails } = props;

  return (
    <div className={mine ? classes.rightSide : classes.leftSide}>
      <Paper style={{ background: mine ? blue[900]: getColor(parseInt(Math.random() * 100) % 16)}}>
        <Box p={1}>
          <Typography variant="caption">
            {userDetails.username}
          </Typography>
          <Typography variant="body2">
            {contentDetails.content}
          </Typography>
          <p className={classes.timeStamp}>
            {contentDetails.sentAt}
          </p>
        </Box>
      </Paper>
    </div>
  );
};

export default Message;