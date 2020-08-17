import React from 'react';
import { Button, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
  text: string;
  event?(): void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.secondary.main,
      '& p': {
        fontWeight: 'bold',
      },
    },
  })
);

export const PlusButton: React.FC<Props> = ({ text, event }) => {
  const classes = useStyles();
  return (
    <Button onClick={event} className={classes.root}>
      <AddCircleIcon fontSize="large" />
      <Typography>{text}</Typography>
    </Button>
  );
};
