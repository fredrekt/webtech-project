import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ScrollAnimation from 'react-animate-on-scroll'

// class HoursRendered extends Component{
//     render(){
//         return(
//             <Jumbotron>
//                 <Container>
//                     <h1 className="jumbotron-header">Project history</h1>
                
                    
//                     {/* <h3 className="hrs-title"> 15 Hours</h3> */}
//                 </Container>
//             </Jumbotron>
                
//         )
//     }
// }
class HoursRendered extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			time: new Date()
		}
		
	}
	
	componentDidMount() {
		
		setInterval(this.update, 1000)
		
	}
	
	update = () => {
		
		this.setState({
			time: new Date()
		})
		
	};
	
	render() {
		
		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()
		
		return (

            <Jumbotron className="clock-section">
                 <Container>
                 <ScrollAnimation animateIn='bounceInUp'
                    animateOut='bounceOutLeft'>
                     <h1 className="jumbotron-header">Project history</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='bounceInLeft'
                animateOut='bounceOutLeft'>
                        <div className="clock-component">
                        <h1>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'am' : 'pm'}</h1>
                        </div>
                </ScrollAnimation>
                        <OverlayTrigger
                                    trigger="hover"
                                    key="bottom"
                                    placement="bottom"
                                    overlay={
                                        <Popover className="pop-over-color" id={`popover-positioned-$placement`}>
                                        <Popover.Title as="h3"></Popover.Title>
                                        <Popover.Content>
                                            <strong id="color-white">Amount of hours spent on this project</strong>
                                        </Popover.Content>
                                        </Popover>
                                    }
                                    >
                <ScrollAnimation animateIn='bounceInRight'
                animateOut='bounceOutRight'>
                            <h3 className="sub-clock-txt">23 hours rendered</h3>
                </ScrollAnimation>
                        </OverlayTrigger>
                 </Container>
            </Jumbotron>

		
			
		
		)
		
	}
	
}
export default HoursRendered