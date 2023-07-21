import { Button, Modal } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AppContext } from '@/context/appcontext';
// import '@/styles/formio.css'

const DynamicForm = dynamic(() => import('@formio/react').then((module) => module.Form), {
  ssr: false,
});

const FormModal = () => {
    const { showModal, setShowModal, formData, setFormData } = useContext(AppContext);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Preview Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <DynamicForm form={{
  display: 'form',
  components: formData
  }}
 />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
