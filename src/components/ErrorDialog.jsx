import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorDialog = ({ open, closeHandler, errorMessage, isReloadIncluded }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>{errorMessage}</DialogTitle>
      <DialogActions>
        {isReloadIncluded && <Button onClick={refreshPage}>Reload</Button>}
        <Button onClick={closeHandler}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;