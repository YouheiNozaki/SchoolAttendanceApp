import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

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
import CreateIcon from '@material-ui/icons/Create';

import { Layout } from '../components/layout';
import { FormDialog } from '../components/molecules/FormDialog';

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
// mockデータ
const rows = [
  createData(1, '2020-07-21', '01:00'),
  createData(2, '2020-08-15', '00:30'),
];

export const Home: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [Edit, setEdit] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const EditOpen = () => {
    setEdit(true);
  };
  const EditClose = () => {
    setEdit(false);
  };

  return (
    <>
      <Layout>
        <Grid
          container
          alignItems="center"
          justify="flex-end"
          className={classes.addButton}
        >
          <Button onClick={handleOpen}>
            <AddCircleIcon fontSize="large" />
            <Typography>追加する</Typography>
          </Button>
          <FormDialog
            title={'調整を作成する'}
            isOpen={open}
            ButtonText="作成"
            doClose={() => handleClose()}
          />
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
                    <Button>
                      <DeleteIcon />
                    </Button>
                    <Button onClick={EditOpen}>
                      <CreateIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <FormDialog
          title="調整を編集する"
          isOpen={Edit}
          ButtonText="編集"
          doClose={() => EditClose()}
        />
      </Layout>
    </>
  );
};
