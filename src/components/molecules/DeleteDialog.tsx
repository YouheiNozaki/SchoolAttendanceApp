import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';

type Props = {
  title: string;
  isOpen: boolean;
  ButtonText: string;
  doClose: () => void;
};

export const DeleteDialog: React.FC<Props> = ({
  title,
  isOpen,
  ButtonText,
  doClose,
}) => {
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
        <DialogContent>使用してもよろしいですか？</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          {/* TODO:処理を加える関数に変更する */}
          <Button onClick={handleClose} color="primary">
            {ButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
