import React from 'react';
import {Button,Modal} from 'react-bootstrap'

const Notifications = () => {
  return (
    <div>
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Notifications</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    
  </Modal.Footer>
</Modal.Dialog>
    </div>
  )
}

export default Notifications