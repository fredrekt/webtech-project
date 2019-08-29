import React, {Component} from 'react'
import About from './About'
import HoursRendered from './HoursRendered'
import Navbar from './Navbar'
import Footer from './Footer'
import Team from './Team'
import ProjectTools from './ProjectTools'

class AboutComponent extends Component{
    render(){
        return(
            <div>
                {/* <Navbar/> */}
                    <About/>
                    <Team/>
                    <HoursRendered/>
                    <ProjectTools/>
                {/* <Footer/> */}
            </div>

        )
    }
}
export default AboutComponent 