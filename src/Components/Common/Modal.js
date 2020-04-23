import React from 'react';

import Dialog from '@material-ui/core/Dialog';

const Modal = (props) => {
  const { open, setOpen, children, width = "xs" } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog 
      fullWidth={true}
      maxWidth={width}
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
      children={children}
    />
  );
};

export default Modal;