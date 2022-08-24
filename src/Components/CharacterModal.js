import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function CharacterModal({character}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  return (
      <>
      <Button variant="primary" onClick={handleShow} className="modalBut">
        LEARN MORE
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title style={{textAlign: 'center', paddingTop: "1rem" }}>{character.name}</Modal.Title>
              <Modal.Body >
                  <div>
                      <img src={character.image} alt="img"></img>
                  </div>
              </Modal.Body>
                <div className='modalCenter'>
                    Species: {character.species}
                  </div>
                   <div className='modalCenter'>
                    Status: {character.status}
                  </div>
              <div className='divBut'>
                <Button variant="secondary" onClick={handleClose} className='closeBut'>
            Close
          </Button >
              </div>
              
      </Modal >
    </>
  )
}

export default CharacterModal