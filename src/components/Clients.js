import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Clients.css'
import patrick from  '../img/client-1.jpg'
import citu from '../img/cit-logo.jpg'
import burger from '../img/burger-joint.jpg'
import ph from '../img/ph-logo.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import ScrollAnimation from 'react-animate-on-scroll';

const Clients = () =>{
    return(
        <Container>
        <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Developer's Clients and Works</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                <ScrollAnimation 
                    animateIn='bounce'
                    animateOut='bounceOut'>
            <h1 style={{'color':'black','margin-top':'5%','margin-bottom':'5%'}} className="client-txt">Our Clients</h1>
            </ScrollAnimation>
            </OverlayTrigger>
            <ScrollAnimation 
                    animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
            <Row>
                <Col className="align-center">
                <OverlayTrigger
                    key='top'
                    placement='left'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Made Digital Portfolio</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <img src={patrick} className="client-img" alt=""/>
                </OverlayTrigger>
                    <h4 className="client-name">Patrick Delgado</h4>
                    <h4 className="client-sub">Photographer</h4>
                    <h4 className="client-url"><a href="http://ptrckadvntrs.ga">patrickadventures</a></h4>
                </Col>
                <Col className="align-center">
                <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>School Project</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <img src={citu} alt="" className="client-img"/>
                </OverlayTrigger>
                    <h4 className="client-name">CIT - University</h4>
                    <h4 className="client-sub">University School in Cebu</h4>
                    <h4 className="client-url"><a href="https://www.cit.edu/v6/">cebuinstituteoftechnology</a></h4>
                </Col>
                <Col className="align-center">
                <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Snacks for the Devs</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <img src={burger} alt="" className="client-img"/>
                </OverlayTrigger>
                    <h4 className="client-name">Burger Joint</h4>
                    <h4 className="client-sub">Burger Snack in Mabolo</h4>
                    <h4 className="client-url"><a href="https://www.foodpanda.ph/restaurant/p3my/the-burger-joint">burgerjointorder</a></h4>
                </Col>
                <Col className="align-center">
                <OverlayTrigger
                    key='top'
                    placement='right'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Made Online Docs Processing</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <img src={ph} alt="" className="client-img-ph"/>
                </OverlayTrigger>
                    <h4 className="client-name">Philippine Government</h4>
                    <h4 className="client-sub">Online Document Processing</h4>
                    <h4 className="client-url"><a href="https://proj-gov.appspot.com/">proj-gov-online</a></h4>
                </Col>
            </Row>
            </ScrollAnimation>
        </Container>
    )
}
export default Clients