import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Features.css'
import db from '../img/db-icon.png'
import build from '../img/build.png'
import secure from '../img/security.jpg'
import cart from '../img/shop.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ScrollAnimation from 'react-animate-on-scroll';


class Features extends Component{
    state={
        header:"What is Database Oriented?",
        content:"Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. Aliquam erat volutpat."
    }
    handleDataSecurity = (e) =>{
        this.setState({
            header:'Data Secured, How?',
            content: 'Etiam in massa imperdiet, consequat neque consequat, egestas velit. Ut id neque euismod, ultrices tortor in, pharetra lectus. Sed scelerisque ultrices mauris sit amet scelerisque. Donec fermentum ante ex, id malesuada est congue at. Proin non tristique eros. Donec eleifend nunc nunc. Aliquam ut molestie ante. Quisque eget porttitor neque. In volutpat felis ipsum, non sodales justo accumsan quis. Curabitur ornare consequat imperdiet. Vivamus pellentesque vel dolor sit amet euismod. Phasellus eu porta augue. Cras sed dui lacus. In in lorem molestie, tempor libero in, ornare neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, ligula at pharetra viverra, velit nulla lobortis lorem, vitae laoreet felis ex at lacus. Maecenas sagittis fringilla cursus. Etiam blandit dapibus commodo. Aliquam varius massa semper, euismod ante vitae, porttitor mi. Mauris eget scelerisque dolor, id rhoncus neque. Aliquam lacinia at tortor at tincidunt. Phasellus tristique mattis cursus.'
            })
        console.log(this.state)
    }
    handleDbOrient = (e) =>{
        this.setState({
            header: "What is Database Oriented?",
            content:"Praesent eget quam vitae sem tempus sodales. Donec nec ante nibh. Nulla varius sit amet neque a dignissim. Ut mattis dolor vel sodales malesuada. Curabitur bibendum felis in lectus tempus, eu consequat libero cursus. Etiam dui mi, congue vitae nibh vel, convallis auctor est. Phasellus commodo dignissim mi in varius. Ut elementum faucibus lectus. Etiam ut odio non purus euismod egestas non ut massa. In dictum lacus non quam egestas hendrerit. Phasellus sodales id lectus et fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pellentesque sapien a dolor volutpat venenatis sed sit amet nulla. Sed congue erat nisl, eget sodales ligula semper in. Aliquam erat volutpat."        })
    }
    handleCartSys = (e) =>{
        this.setState({
            header: "What is Cart System?",
            content:"Curabitur ultrices, orci non faucibus interdum, elit eros tempus lectus, et viverra arcu erat laoreet lectus. Nulla sit amet volutpat augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nec ultricies elit. Ut at lorem quam. Curabitur consequat condimentum tortor, eget cursus augue vulputate et. Fusce et urna in augue mollis tristique. Curabitur laoreet velit at velit sollicitudin gravida at sed dolor. Sed malesuada ligula nec arcu bibendum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mattis at tortor eget mollis. Integer purus risus, egestas vitae accumsan efficitur, semper tristique augue. Etiam elit elit, lobortis eu purus vitae, sagittis auctor ipsum. Fusce nec dolor ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin convallis, lectus sed gravida hendrerit, est ligula volutpat neque, eu rhoncus libero nisi a dui. Nulla in nisl faucibus, varius justo eget, finibus nisl. Donec felis est, mattis non leo eu, placerat tincidunt elit. In hac habitasse platea dictumst."
        })
    }
    handleWebApp = (e) =>{
        this.setState({
            header: "Dynamic Web Application, what is it?",
            content: "Aliquam ac sodales ligula. Ut semper diam vel diam fringilla malesuada. Etiam laoreet lorem risus, pharetra fermentum erat commodo non. Nullam hendrerit molestie arcu ac posuere. Nulla in elementum dolor, at feugiat mi. Donec cursus tortor viverra, interdum dui quis, tincidunt orci. Mauris ipsum eros, pellentesque eu mollis vel, lobortis sed metus. Donec vitae ullamcorper erat. Nunc vitae tellus interdum, dictum augue in, tristique arcu. Vivamus consectetur pulvinar nibh vel tincidunt. Aenean rutrum neque in eros vestibulum tristique. Curabitur venenatis felis tellus, sit amet sodales leo sodales a. Phasellus eget lectus velit. Vivamus fermentum at felis eget convallis. Aliquam semper felis nec ante rhoncus, nec dapibus urna rhoncus. Donec nisl erat, lacinia ac dignissim nec, blandit non mi. Praesent nisl sapien, sollicitudin quis velit eu, pulvinar mattis odio. Curabitur nec nulla sit amet justo vehicula pellentesque. Fusce a maximus ante."
        })
    }
    render(){
        return(
            <Container>
            <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Our Application's Features</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                <ScrollAnimation animateIn='bounceInUp'
                    animateOut='bounceOutLeft'>
                <h1 style={{'text-align':'center','margin-bottom':'3%','color':'black'}} className="header-txt">Features</h1>
                </ScrollAnimation>
                </OverlayTrigger>
                <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                <Row>
                    <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>What is Database Oriented?</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <Col className="hover-item">
                    <a onClick={this.handleDbOrient} className="feature-choices" href="#hello">
                        <Container className="align-center">
                            <img src={db} alt="" className="img-feature"/>
                        <h4 className="feature-title">Database Oriented</h4>
                        </Container>
                    </a>
                    </Col>
                    </OverlayTrigger>
                    <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Data Security, what does it mean?</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <Col className="hover-item">
                    <a onClick={this.handleDataSecurity}  className="feature-choices" href="#hello">
                        <Container className="align-center">
                            <img src={secure} alt="" className="img-feature"/>
                            <h4 className="feature-title">Data Security</h4>
                        </Container>
                    </a>
                    </Col>
                    </OverlayTrigger>
                    <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>What is Cart System?</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <Col className="hover-item">
                    <a onClick={this.handleCartSys} className="feature-choices" href="#hello">
                        <Container className="align-center">
                            <img src={cart} alt="" className="img-feature"/>
                            <h4 className="feature-title">Cart System</h4>
                        </Container>
                    </a>
                    </Col>
                    </OverlayTrigger>

                    <OverlayTrigger
                    key='top'
                    placement='top'
                    overlay={
                    <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>What is Cart System?</strong>
                                        </Popover.Content>
                                        </Popover>
                    }
                >
                    <Col title="Dynamic Web Application?" className="hover-item">
                    <a onClick={this.handleWebApp} className="feature-choices" href="#hello">
                        <Container className="align-center">
                            <img src={build} alt="" className="img-feature"/>
                            <h4 className="feature-title">Dynamic Web App</h4>
                        </Container>
                    </a>
                    </Col>
                </OverlayTrigger>
                </Row>
                </ScrollAnimation>
                {/* <Row>
                    <Col className="feature-name">Database Oriented</Col>
                    <Col className="feature-name">Data Security</Col>
                    <Col className="feature-name">Cart System</Col>
                    <Col className="feature-name">Dynamic Web App</Col>
                </Row> */}
                <Row style={{'margin-bottom':'5%'}}>
                    <Container>
                    <ScrollAnimation animateIn='bounceInRight'
                    animateOut='bounceOutLeft'>
                        <h1 className="feature-title">{this.state.header}</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInLeft'
                    animateOut='bounceOutRight'>
                        <p className="feature-content">{this.state.content}</p>
                    </ScrollAnimation>
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
} 
export default Features