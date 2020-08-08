import React from 'react';
import dayjs from 'dayjs';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Layout } from '../components/layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      padding: '24px',
      '& button': {
        color: theme.palette.secondary.main,
        '& p': {
          fontWeight: 'bold',
        },
      },
    },
    tableContainer: {
      paddding: '12px',
    },
    table: {
      padding: '12px',
    },
  })
);

// mockデータを作成する関数

function createData(id: number, day: string, overTime: string) {
  return { id, day, overTime };
}

const rows = [
  createData(1, '2020-07-21', '01:00'),
  createData(2, '2020-08-15', '00:30'),
];

export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Grid
          container
          alignItems="center"
          justify="flex-end"
          className={classes.addButton}
        >
          <Button>
            <AddCircleIcon fontSize="large" />
            <Typography>追加する</Typography>
          </Button>
        </Grid>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>日付</TableCell>
                <TableCell>調整取得時間</TableCell>
                <TableCell>失効日</TableCell>
                <TableCell>使用/編集</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {dayjs(row.day).format('YYYY年MM月DD日')}
                  </TableCell>
                  <TableCell>{row.overTime}</TableCell>
                  <TableCell>
                    {dayjs(row.day).add(16, 'week').format('YYYY年MM月DD日')}
                  </TableCell>
                  <TableCell>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Layout>
    </>
  );
};
