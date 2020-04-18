import React from 'react';

import Dialog from '@material-ui/core/Dialog';

const Modal = (props) => {
  const { open, setOpen, children } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
      children={children}
    />
  );
};

export default Modal;