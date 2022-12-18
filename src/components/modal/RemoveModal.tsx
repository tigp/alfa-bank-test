import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { modalSelector, closeModal } from '../../redux/modalSlice';
import { removeDog } from '../../redux/dogsSlice';

function RemoveModal() {
  const { isShow, targetId } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());
  const handleRemove = (id: string) => {
    dispatch(removeDog(id));
    handleClose();
  };

  return (
    <Modal show={isShow} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Remove dog?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={() => handleRemove(targetId)} variant="outline-danger">
          Remove
        </Button>
        <Button onClick={handleClose} variant="outline-secondary">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RemoveModal;
