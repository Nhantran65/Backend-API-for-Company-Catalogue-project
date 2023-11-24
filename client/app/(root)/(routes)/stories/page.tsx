"use client"

import StoryForm from "../../../components/StoryEntryForm";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import StoryList from "../../../components/StoryList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StoryPage: React.FC = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>Stories</CardTitle>
        <CardDescription>Go over some of the alumis experiences</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="space-y-8">
    <StoryList />
    </div>
      </CardContent>
    </Card>
    
      

      
      <div className="max-w-md mx-auto mt-8">
        <button 
        onClick={handleShow} 
        className="block btn btn-primary text-white font-bold px-4 py-2 rounded"
        
        >
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
      </>
  
  );
}

export default StoryPage;