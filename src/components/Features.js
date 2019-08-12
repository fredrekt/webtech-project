import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Features.css'
import db from '/Users/Acer/Desktop/webtech-project/src/img/db-icon.png'
import build from '/Users/acer/Desktop/webtech-project/src/img/build.png'
import secure from '/users/acer/Desktop/webtech-project/src/img/security.jpg'
import cart from '/users/Acer/Desktop/webtech-project/src/img/shop.png'

const Features = () =>{
    return(
        <Container>
            <h1 style={{'text-align':'center','margin-bottom':'3%','color':'black'}} className="header-txt">Features</h1>
            <Row>
                <Col>
                    <img src={db} alt="" className="img-feature"/>
                </Col>
                <Col>
                    <img src={secure} alt="" className="img-feature"/>
                </Col>
                <Col>
                    <img src={cart} alt="" className="img-feature"/>
                </Col>
                <Col>
                    <img src={build} alt="" className="img-feature"/>
                </Col>
            </Row>
            <Row>
                <Col>Database Oriented</Col>
                <Col>Data Security</Col>
                <Col>Cart System</Col>
                <Col>Dynamic Web App</Col>
            </Row>
            <Row style={{'margin-bottom':'5%'}}>
                <Container>
                    <h1 className="feature-title">Database Oriented</h1>
                    <p className="feature-content">Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales <br/>malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor <br/>est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In <br/>dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in <br/>faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. <br/>Aliquam erat volutpat.</p>
                </Container>
                {/* <Container> 
                    <h1 className="feature-title">Data Security</h1>
                    <p className="feature-content">Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales <br/>malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor <br/>est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In <br/>dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in <br/>faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. <br/>Aliquam erat volutpat.</p>
                </Container>
                <Container>
                    <h1 className="feature-title">Cart System</h1>
                    <p className="feature-content">Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales <br/>malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor <br/>est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In <br/>dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in <br/>faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. <br/>Aliquam erat volutpat.</p>
                </Container>
                <Container>
                    <h1 className="feature-title">Dynamic Web App</h1>
                    <p className="feature-content">Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales <br/>malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor <br/>est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In <br/>dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in <br/>faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. <br/>Aliquam erat volutpat.</p>
                </Container> */}
            </Row>
        </Container>
    )
}
export default Features