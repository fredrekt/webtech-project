import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
const Menu = () =>{
    return(
    <Navbar id="navbar-black">
        <Navbar.Brand id="brand-name" href="#home">shoe Shack</Navbar.Brand>
            <Nav id="white-txt" className="ml-auto">
                 <Nav.Link style={{color:"white", "text-transform":"uppercase","letter-spacing":'0.05em'}} className="mr-3" href="#home">Home</Nav.Link>
                    <Nav.Link style={{color:"white", "text-transform":"uppercase","letter-spacing":'0.05em'}} className="mr-3" href="#features">About</Nav.Link>
                        <Nav.Link style={{color:"white", "text-transform":"uppercase","letter-spacing":'0.05em'}} href="#pricing">Shop</Nav.Link>
        </Nav>
    </Navbar>
        )
}
export default Menu