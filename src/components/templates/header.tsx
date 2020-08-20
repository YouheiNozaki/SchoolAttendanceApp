import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Home, Help } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      paddingLeft: '24px',
      '& h1': {
        color: theme.palette.primary.contrastText,
      },
    },
    nav: {
      '& a': {
        color: theme.palette.primary.contrastText,
      },
      '& a:hover': {
        color: theme.palette.secondary.light,
      },
    },
  })
);

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      alignItems="center"
    >
      <Grid className={classes.title} item xs={6}>
        <h1>残業調整くん</h1>
      </Grid>
      <Grid
        container
        className={classes.nav}
        xs={6}
        spacing={6}
        justify="flex-end"
      >
        <Grid item>
          <Link to="/">
            <Home fontSize="large" />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/question">
            <Help fontSize="large" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
