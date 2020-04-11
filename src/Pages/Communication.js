import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

import Layout from "../Components/Layout";
import Chat from "../Components/Communication/Chat";

import { USER } from "../Constants/Roles";
import M from "../__Mocks__/Data/Communication";
import Faker from "faker";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  }
}));

const Communication = (props) => {
  const classes = useStyles();

  return (
    <Layout title="Communication" role={USER}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box>
          <Grid
            container
            direction="row"
            spacing={1}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Chat
                messages={M.messages}
                currentUser={M.messages[Faker.random.number(9)].userDetails.username}
              />
            </Grid>
          </Grid>
        </Box>
      </main>
    </Layout >
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Communication);