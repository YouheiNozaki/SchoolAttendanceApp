import React from 'react';
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
  Typography,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Layout } from '../components/layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      padding: '24px',
      color: theme.palette.secondary.main,
      '& p': {},
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

function createData(id: number, day: string, overTime: number, limit: string) {
  return { id, day, overTime, limit };
}

const rows = [
  createData(1, '2020-07-21', 1, '2020-11-21'),
  createData(2, '2020-08-15', 30, '2020-12-15'),
];

export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Grid container alignItems="center" className={classes.addButton}>
          <AddCircleIcon fontSize="large" />
          <Typography>追加する</Typography>
        </Grid>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>日付</TableCell>
                <TableCell>調整取得時間</TableCell>
                <TableCell>失効日</TableCell>
                <TableCell>使用/削除</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.day}
                  </TableCell>
                  <TableCell>{row.overTime}</TableCell>
                  <TableCell>{row.limit}</TableCell>
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
