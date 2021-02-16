import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : '0.7rem'
  },
  paper: {
    backgroundColor: '#c7cfb7',
    fontFamily : 'helvetica',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button : {
      padding: '0.5rem 1.5rem',
      margin : '0.2rem auto'
  },
  container : {
      width: '100%',
      textAlign : 'center',
      marginBottom : '1rem'
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div classsname = {classes.container}>
      <Button className={classes.button}  variant="contained" onClick={handleOpen} color="primary">Place Order</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Order Successfully Placed !!!</h2>
            <p id="transition-modal-description">
                {props.children}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
