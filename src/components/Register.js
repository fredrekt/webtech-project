import React, { Component, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import './Register.css'

class Register extends Component{
    
    render(){
        return(
            <Container className="form-registration">
                <Form>
                    <h1 className="jumbotron-header">User Registration</h1>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridUsername">
                       
                        <Form.Control type="text" placeholder="Your Username" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="youremail@mail.com" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="text" placeholder="Your Password" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control type="password" placeholder="Confirm password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFname">
                        <Form.Control type="text" placeholder="Your Firstname" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMname">
                        <Form.Control type="text" placeholder="Your Middlename" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLname">
                        <Form.Control type="text" placeholder="Your Lastname" />
                        </Form.Group>
            
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridGender">
                        <Form.Control type="text" placeholder="Your Gender" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBdate">
                        <Form.Control type="text" placeholder="Your Birthdate" />
                        </Form.Group>
                    </Form.Row>


                    <Form.Group controlId="formGridAddress">
                        <Form.Control placeholder="House No./ Building No.                                                             Street                                                                          Barangay                                                                                   City/ Municipality" />
                    </Form.Group>
                    
                    

                    {/* <Button onClick={readyRegister}>Ready</Button> */}

                    <Button variant="dark" type="submit">
                        Create Account
                    </Button>
                    </Form>
            </Container>
        )
    }
}
export default Register