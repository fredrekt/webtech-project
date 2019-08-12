import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Clients.css'
import patrick from  '/users/Acer/Desktop/webtech-project/src/img/client-1.jpg'
import citu from '/users/Acer/Desktop/webtech-project/src/img/cit-logo.jpg'
import burger from '/users/Acer/Desktop/webtech-project/src/img/burger-joint.jpg'
import ph from '/users/Acer/Desktop/webtech-project/src/img/ph-logo.png'

const Clients = () =>{
    return(
        <Container>
            <h1 style={{'color':'black'}} className="client-txt">Our Clients</h1>
            <Row>
                <Col>
                    <img title="Made Digital Portfolio" src={patrick} className="client-img" alt=""/>
                </Col>
                <Col>
                    <img title="School Project" src={citu} alt="" className="client-img"/>
                </Col>
                <Col>
                    <img title="Snacks for the Devs" src={burger} alt="" className="client-img"/>
                </Col>
                <Col>
                    <img title="Made Online Docs Processing" src={ph} alt="" className="client-img-ph"/>
                </Col>
            </Row>
            <Row>
                <Col><h4 className="client-name">Patrick Delgado</h4></Col>
                <Col><h4 className="client-name">CIT - University</h4></Col>
                <Col><h4 className="client-name">Burger Joint</h4></Col>
                <Col><h4 className="client-name">Philippine Government</h4></Col>
            </Row>
            <Row>
                <Col><h4 className="client-sub">Photographer</h4></Col>
                <Col><h4 className="client-sub">University School in Cebu</h4></Col>
                <Col><h4 className="client-sub">Burger Snack in Mabolo</h4></Col>
                <Col><h4 className="client-sub">Online Document Processingx</h4></Col>
            </Row>
            <Row>
                <Col><h4 className="client-url"><a href="http://ptrckadvntrs.ga">patrickadventures</a></h4></Col>
                <Col><h4 className="client-url"><a href="https://www.cit.edu/v6/">cebuinstituteoftechnology</a></h4></Col>
                <Col><h4 className="client-url"><a href="https://www.foodpanda.ph/restaurant/p3my/the-burger-joint">burgerjointorder</a></h4></Col>
                <Col><h4 className="client-url"><a href="https://proj-gov.appspot.com/">proj-gov-online</a></h4></Col>
            </Row>
        </Container>
    )
}
export default Clients