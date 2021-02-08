import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RecipeContext } from '../context/RecipeContext';
import '../pages/RecipeDetails.css';

function RecipeDetailsModal() {
  const {
    darkMode,
    show,
    setShow,
  } = useContext(RecipeContext);

  let buttonType = 'primary';
  let mode = '';
  if (darkMode) {
    buttonType = 'dark';
    mode = 'dark-modal';
  }

  return (
    <Modal
      show={ show }
      onHide={ () => setShow(false) }
      size="sm"
      centered
    >
      <Modal.Header className={ mode } closeButton />
      <Modal.Body className={ mode }>
        <p className="modal-text">Link copiado!</p>
      </Modal.Body>
      <Modal.Footer className={ mode }>
        <Button
          className={ `btn-${mode}` }
          variant={ buttonType }
          onClick={ () => setShow(false) }
        >
          Fechar janela
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeDetailsModal;
