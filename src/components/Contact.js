import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './Contact.css'
import Jumbotron from 'react-bootstrap/Jumbotron';

const Contact = () =>{
    return(
        <Form>
            <Jumbotron style={{'background-color':'black', 'border-radius':'0px'}}>
                <h1 className="header-txt">Get In Touch</h1>
    <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label className="form-label">Full Name </Form.Label>
        <Form.Control className="form-input" type="email" placeholder="Firstname                                              Middlename                                              Lastname" />
        </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control className="form-input" placeholder="example@mail.com" />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control className="form-input" placeholder="House No./ Building No.                           Street                                             Municipality" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control className="form-input" as="textarea" rows="4" />
    </Form.Group>    
    <Button size="lg" variant="dark" type="submit">
        FIRE AWAY
    </Button>
    </Jumbotron>
</Form>
    )
}
export default Contact