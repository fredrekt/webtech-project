import React, { Component } from 'react'
import './Team.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Dev1 from '../img/pp.jpg'
import github from '../img/github-icon.png'
import fb from '../img/fb-icon.png'
import twitter from '../img/twitter-icon.png'
import gmail from '../img/gmail.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

class Team extends Component{
    render(){
        return(
            <Container className="team-section">
            <ScrollAnimation animateIn='bounceInLeft'
            animateOut='bounceOutLeft'>
                <h1 className="jumbotron-header">Our Team</h1>
            </ScrollAnimation>
                <Container className="team-members-section">
                    <Row>
                    
                        <Col lg md xs={4}>
                            <OverlayTrigger
                                trigger="hover"
                                key="top"
                                placement="top"
                                overlay={
                                    <Popover id={`popover-positioned-$placement`}>
                                    <Popover.Title as="h3"></Popover.Title>
                                    <Popover.Content>
                                        <strong>Full Stack Developer</strong>
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                        
                                <img className="team-img" src={Dev1}/>
                                </OverlayTrigger>
                                    <h4 className="team-name">Fredrick Garingo</h4>
                                    <p className="team-job">Frontend Developer, UI/UX Design,<p className="team-job-eng">Database Engineer</p></p>
                                    <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Github Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img" src={github}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://www.facebook.com/fredgaringo">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Facebook Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={fb}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Twitter Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={twitter}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Email Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={gmail}/>
                                    </OverlayTrigger>
                                </a>
                        </Col>
                        <Col xs={4}>
                            <OverlayTrigger
                                    trigger="hover"
                                    key="top"
                                    placement="top"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Web Developer</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                <img className="team-img" src={Dev1}/>
                            </OverlayTrigger>
                                <h4 className="team-name">John Romer</h4>
                                <p className="team-job">Backend Developer, created Register <p className="team-job-eng">Component</p></p>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Github Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img" src={github}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://www.facebook.com/fredgaringo">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Facebook Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={fb}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Twitter Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={twitter}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Email Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={gmail}/>
                                    </OverlayTrigger>
                                </a>
                        </Col>
                        <Col xs={4}>
                            <OverlayTrigger
                                        trigger="hover"
                                        key="top"
                                        placement="top"
                                        overlay={
                                            <Popover id={`popover-positioned-$placement`}>
                                            <Popover.Title as="h3"></Popover.Title>
                                            <Popover.Content>
                                                <strong>Mobile Developer</strong>
                                            </Popover.Content>
                                            </Popover>
                                        }
                                        >
                                <img className="team-img" src={Dev1}/>
                            </OverlayTrigger>    
                                <h4 className="team-name">Karl Cayobit</h4>
                                <p className="team-job">Researcher, Filled out Google Docs, <p className="team-job-eng">Item Verification </p> </p>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Github Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img" src={github}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://www.facebook.com/fredgaringo">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Facebook Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={fb}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Twitter Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={twitter}/>
                                    </OverlayTrigger>
                                </a>
                                <a href="https://github.com/fredrekt">
                                    <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong>Email Account</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                                        <img className="team-mem-img-2" src={gmail}/>
                                    </OverlayTrigger>
                                </a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
export default Team