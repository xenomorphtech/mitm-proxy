import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Typography } from '@material-ui/core';

import Layout from '../Components/Layout';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  const numbers = {
    requests: 768
  };

  return (
    <Layout title="Dashboard">
      <Box p={2}>
        <Grid
          container
          direction="row"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Paper className={classes.paper} elevation={4} className="w-100">
              <Box p={2}>
                <Typography variant="h1" component="h2">
                  {numbers.orders}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Total no. of Requests
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;