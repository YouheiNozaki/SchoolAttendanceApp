import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import { PlusButton } from '../components/atoms/PlusButton';
import { Layout } from '../components/layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      '& p': {
        marginLeft: '8px',
      },
    },
    form: {
      '& form': {
        margin: '8px',
        '& button': {
          marginTop: '8px',
        },
      },
    },
  })
);

export const Setting: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid
        className={classes.title}
        container
        direction="row"
        alignItems="center"
      >
        <h1>アプリ設定</h1>
        <p>アプリを動かすために以下の値を入力してください</p>
      </Grid>
      <Grid className={classes.form}>
        <form>
          <TextField
            required
            id="outlined-full-width"
            label="API URL"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText="GASアプリケーションのAPI URLを入力してください"
          />
          <TextField
            required
            id="outlined-full-width"
            label="Auth Token"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText="GASアプリケーションのAuthTokenを入力してください"
          />
          {/* eventsを設定する */}
          <PlusButton text="保存する" />
        </form>
      </Grid>
    </Layout>
  );
};
