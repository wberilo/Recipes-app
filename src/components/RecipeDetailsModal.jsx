import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RecipeContext } from '../context/RecipeContext';
import '../pages/RecipeDetails.css';

function RecipeDetailsModal() {
  const {
    show,
    setShow,
  } = useContext(RecipeContext);

  return (
    <Modal
      show={ show }
      onHide={ () => setShow(false) }
      size="sm"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <p className="modal-text">Link copiado!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ () => setShow(false) }>Fechar janela</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeDetailsModal;
