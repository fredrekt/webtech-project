import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Github from '../img/github-icon-devtools.png'
import Stackoverflow from '../img/stackoverflow-icon.png'
import Vscode from '../img/vscode-icon.png'
import Netlify from '../img/netlify-logo.png'
import Bootstrap from '../img/bootstrap-icon.png'
import ReactIcon from '../img/react-icon.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

const ProjectTools = () =>{
    return(
        <div className="container-mt-3">
            <Container>
                <h1 style={{'margin-top':'-10%', 'margin-bottom':'8%'}} className="jumbotron-header">Project Development Tools</h1>
                <Container>
                    <Row className="dev-tools-1">
                    <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement="bottom"
                        overlay={
                            <Popover id={`popover-positioned-$top`}>
                            <Popover.Title as="h3">Github for Software Development</Popover.Title>
                            <Popover.Content>For
                                <strong> Developers</strong> By Developers
                            </Popover.Content>
                            </Popover>
                        }
                        >
                        <Col lg={4}>
                            <img className="asd" src={Github} rounded/>
                        </Col> 
                        </OverlayTrigger>
                        <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement="bottom"
                        overlay={
                            <Popover id={`popover-positioned-$top`}>
                            <Popover.Title as="h3">Netlify for Application Deployment</Popover.Title>
                            <Popover.Content>Used by
                                <strong> Frontend Developers</strong> and UI/UX Designers
                            </Popover.Content>
                            </Popover>
                        }
                        >
                        <Col lg={4}>
                            <img className="asd" src={Netlify} rounded/>
                        </Col>  
                        </OverlayTrigger> 
                        <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement="bottom"
                        overlay={
                            <Popover id={`popover-positioned-$top`}>
                            <Popover.Title as="h3">Stackoverflow for Bug Fixes</Popover.Title>
                            <Popover.Content>Used by
                                <strong> Software Developers</strong>, a little help wont hurt
                            </Popover.Content>
                            </Popover>
                        }
                        >         
                        <Col lg={4}>
                            <img className="asd" src={Stackoverflow} rounded/>
                        </Col>
                        </OverlayTrigger>          
                    </Row>
                    <Row className="dev-tools-2">
                    <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement="bottom"
                        overlay={
                            <Popover id={`popover-positioned-$top`}>
                            <Popover.Title as="h3">Bootstrap for Responsive UI</Popover.Title>
                            <Popover.Content>Used for building
                                <strong> Frontend UI</strong>, a more responsive application espicially mobile
                            </Popover.Content>
                            </Popover>
                        }
                        >    
                        <Col lg={4}>
                            <img className="img-tools-2" src={Bootstrap} rounded/>
                        </Col>  
                        </OverlayTrigger>
                        <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement="bottom"
                        overlay={
                            <Popover id={`popover-positioned-$top`}>
                            <Popover.Title as="h3">ReactJS for UI's</Popover.Title>
                            <Popover.Content>Used by
                                <strong> facebook</strong>, a recyclable component building library
                            </Popover.Content>
                            </Popover>
                        }
                        >    
                        <Col lg={4}>
                            <img className="img-tools-2" src={ReactIcon} rounded/>
                        </Col> 
                        </OverlayTrigger>
                        <OverlayTrigger
                        trigger="click"
                        key='bottom'
                        placement="bottom"
                        overlay={
                            <Popover id={`popover-positioned-$top`}>
                            <Popover.Title as="h3">Visual Studio Code for IDE</Popover.Title>
                            <Popover.Content>Used by
                                <strong> Developers</strong>, an open source cool IDE with dope extensions and many more
                            </Popover.Content>
                            </Popover>
                        }
                        >  
                        <Col lg={4}>
                            <img className="img-tools-2" src={Vscode} rounded/>
                        </Col>   
                        </OverlayTrigger> 
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
export default ProjectTools