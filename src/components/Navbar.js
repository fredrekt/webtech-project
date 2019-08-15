import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Menu = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <Navbar sticky="top" id="navbar-black">
        <Navbar.Brand id="brand-name" href="#home">shoe Shack</Navbar.Brand>
            <Nav id="white-txt" className="ml-auto">
                 <Nav.Link style={{color:"white", "text-transform":"","letter-spacing":'0.05em'}} className="mr-3" href="#home">Home</Nav.Link>
                    <Nav.Link style={{color:"white", "text-transform":"","letter-spacing":'0.05em'}} className="mr-3" href="#features">About</Nav.Link>
                        <Nav.Link style={{color:"white", "text-transform":"","letter-spacing":'0.05em'}} href="#pricing" onClick={handleShow}>Shop</Nav.Link>
        </Nav>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <input type="text" id="username" name="username" placeholder="Enter Username" className="form-control mb-2"/>
                <input type="text" id="password" name="password" placeholder="Enter Password" className="form-control mb-2"/>
                <a className="modal-form-url" href="#register">New to Shoe Shack? Tap me</a>
            </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar> 
    
        )
}
export default Menu