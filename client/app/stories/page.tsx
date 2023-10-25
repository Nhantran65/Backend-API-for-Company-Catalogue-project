"use client"
import MainLayout from "../layouts/MainLayout"
import StoryForm from "../components/StoryEntryForm";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import DisplayStory from "../components/displayStory";

const StoryPage: React.FC = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-8">
        <DisplayStory />
        <button onClick={handleShow} className="block bg-purple-600 text-white font-bold px-4 py-2 rounded">
        + Add Stories
        </button>
      </div>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>+ Add Stories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <StoryForm />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

    </MainLayout>
  );
}

export default StoryPage;