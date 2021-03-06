import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './Contact.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import mime from '../img/mime.jpg'

import ScrollAnimation from 'react-animate-on-scroll';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const Contact = () =>{
    return(
    <Container fluid>
        <Row className="bg-black">   
            <Col>
                <Form>
                            
                            <Jumbotron style={{'background-color':'black', 'border-radius':'0px'}}>
                                <ScrollAnimation animateIn='bounceInLeft'
                                animateOut='bounceOutRight'> 
                                <OverlayTrigger
                    key='top'
                    placement='right'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>This is how you reach us</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                                    <h1 className="header-txt">Get In Touch</h1>
                               </OverlayTrigger> 
                                </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInUp'
                    animateOut='bounceOutRight'>             
                    <Form.Row style={{'margin-left':'2.7%'}}>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="form-label">Full Name </Form.Label>
                        <Form.Control className="form-input" type="email" placeholder="Firstname                                              Middlename                                              Lastname" />
                        </Form.Group>
                    </Form.Row>
                    
                
                    <Form.Group style={{'margin-left':'3%'}} controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="form-input" placeholder="example@mail.com" />
                    </Form.Group>

                    <Form.Group style={{'margin-left':'3%'}} controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control className="form-input" placeholder="House No./ Building No.                           Street                                             Municipality" />
                    </Form.Group>
                    <Form.Group style={{'margin-left':'3%'}} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control className="form-input" as="textarea" rows="4" />
                    </Form.Group> 
                    
                    <Button style={{'margin-left':'3%'}} size="lg" variant="dark" type="submit">
                        FIRE AWAY
                    </Button>
                    </ScrollAnimation>

                    </Jumbotron>
                </Form>
            </Col>
            <Col>
                <img title="Ask the Mime?" className="contact-img" src={mime}></img>
            </Col>
</Row>
</Container>
    )
}
export default Contact