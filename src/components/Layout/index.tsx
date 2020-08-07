import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from '../header';
const useStyles = makeStyles({
  Container: { padding: '24px' },
});

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.Container}>
        <main>{children}</main>
      </div>
    </>
  );
};
