import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Header } from '../components/header';
import { Layout } from '../components/Layout';

const useStyles = makeStyles({
  tableContainer: {
    paddding: '12px',
  },
  table: {
    padding: '12px',
  },
});

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
      <Header />
      <Layout>
        <AddCircleIcon fontSize="large" />
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
