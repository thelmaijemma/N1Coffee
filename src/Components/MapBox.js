import React,{useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './LittleMap/LittleMap.js';

function MapModal() {

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reload=()=>window.location.reload();
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} onExit={reload} className="bg-light">
        <Modal.Header closeButton>
          <Modal.Title><img src="logo\WellFindLogos\WF Transparent Dark.png" className="listing-logo" /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="little-map">
<LittleMap lat={listing.lat} lng={listing.lng} />
                        <p className="card-text">Nearby: Muswell Hill, Crouch End, Alexandria Palace</p>
                        <p className="card-text">111-117 Muswell Hill Rd, Muswell Hill, London N10 3HS</p>
                      </div>
                      <div className="add-tags-form">
                        <form>
                          <label for="exampleInputEmail1" className="form-label">Add A Tag To This Listing</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          <button type="submit" className="btn bg-info btn-sm submit-modal">Submit</button>
                        </form>
                      </div>
        </Modal.Body>
        <Modal.Footer>
        <div className="modal-footer">
                        <span className="badge rounded-pill bg-secondary">Secondary</span>
                        <span className="badge rounded-pill bg-secondary">Secondary</span>
                        <span className="badge rounded-pill bg-secondary">Secondary</span>
                        <span className="badge rounded-pill bg-light">Light</span>
                        <span className="badge rounded-pill bg-light">Light</span> </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MapModal;