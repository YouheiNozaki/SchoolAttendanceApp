import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
} from '@material-ui/core';

type Props = {
  title: string;
  isOpen: boolean;
  doClose: () => void;
};

export const FormDialog: React.FC<Props> = ({ title, isOpen, doClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    doClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          {/* TODO:処理を加える関数に変更する */}
          <Button onClick={handleClose} color="primary">
            作成
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
