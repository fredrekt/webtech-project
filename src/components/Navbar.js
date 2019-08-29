import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import AboutComponent from './AboutComponent'
import { Link } from 'react-router-dom'


const Menu = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
  
    <Navbar sticky="top" id="navbar-black">
        <Link className="navbar-brand" to="/" style={{'color':'white', 'text-transform':'uppercase','letterspacing':'0.1em','font-family':'Anton, sans-serif'}}>shoe Shack</Link>
            <Nav id="white-txt" className="ml-auto">
                 <Link to="/" style={{color:"white", "text-transform":"","letter-spacing":'0.05em'}} className="nav-link mr-3" activeClassName="active" href="#home">Home</Link>
                    
                      <Link to="/about-us" style={{color:"gray", "text-transform":"","letter-spacing":'0.05em'}} className="nav-link mr-3">About</Link>
                    
                    {/* <Link to="/about-us">AboutUs</Link> */}
                        <Link className="nav-link" to="/shop" style={{color:"gray", "text-transform":"","letter-spacing":'0.05em'}} href="#pricing" onClick={handleShow}>Shop</Link>
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