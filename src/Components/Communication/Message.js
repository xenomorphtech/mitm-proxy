import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, blueGrey } from "@material-ui/core/colors";

const getColor = (i) => ({
  0: red["900"],
  1: pink["900"],
  2: purple["900"],
  3: deepPurple["900"],
  4: indigo["900"],
  5: lightBlue["900"],
  6: cyan["900"],
  7: teal["900"],
  8: green["900"],
  9: lightGreen["900"],
  10: lime["900"],
  11: yellow["900"],
  12: amber["900"],
  13: orange["900"],
  14: deepOrange["900"],
  15: brown["900"],
  16: blueGrey["900"]
}[i])

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

  console.log(props);

  const { mine, content, username, contentDetails } = props;

  return (
    <div className={mine ? classes.rightSide : classes.leftSide}>
      <Paper style={{ background: mine ? blue[900]: getColor(parseInt(Math.random() * 100) % 16)}}>
        <Box p={1}>
          <Typography variant="caption">
            {username}
          </Typography>
          <Typography variant="body2">
            {content}
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