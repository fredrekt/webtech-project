import React, {Component} from 'react'
import Banner from './Carousel'
import Content from './Jumbotron'
import Features from './Features'
import Contact from './Contact'
import Clients from './Clients'


class HomeComponent extends Component{
    render(){
        return(
            <div>
                <Banner/>
                <Content/>
                <Features/>
                <Contact/>
                <Clients />
            </div>
        )
    }
}
export default HomeComponent