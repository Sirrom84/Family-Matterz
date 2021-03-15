import React from 'react';
import { FcOk } from 'react-icons/fc';
import './ChosenRecipee.scss';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90vw',
    margin: 'auto auto',
  },
  paper: {
    backgroundColor: ' rgba(121, 202, 118, 9.36)',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 10, 1),
  },
}));

export const ChosenRecipee = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <div className='winner'>
              <div className='header'>
                <h2>{props.item.title}</h2>
                <FcOk />
              </div>
              <p>
                {props.item.title} has {props.item.likes}/3 votes
              </p>
              <p>Would you like us to find you a recipee?</p>
              <div className='buttons'>
                <button>Yes Please</button>
                <button onClick={props.handleClose}>No Thanks</button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
