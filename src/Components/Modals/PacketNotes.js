import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Modal from '../Modal';

const PacketNotes = (props) => {

  const { open, setOpen, notes, setNotes } = props;

  const handleChange = ({target: { value }}) => {
    setNotes(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
    >
      <DialogTitle id="form-dialog-title">Packet Notes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Attach notes to the packets, by typing in the below text area.
        </DialogContentText>
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows="4"
          variant="outlined"
          value={notes}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="secondary">
          Cancel
          </Button>
        <Button variant="contained" onClick={handleClose} color="primary">
          Save Notes
          </Button>
      </DialogActions>
    </Modal>
  );
};

export default PacketNotes;