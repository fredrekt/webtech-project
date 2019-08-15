import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '/users/acer/Desktop/webtech-project/src/img/shop-items/carousel-img-1.jpg'
import slide2 from '/users/acer/Desktop/webtech-project/src/img/shop-items/car-img-2.jpg'
import slide3 from '/users/acer/Desktop/webtech-project/src/img/shop-items/banner-last.jpg'
import './Shop.css'

class Shop extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item className="showcase-height">
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    style={{'height':""}}
                    />
                    <Carousel.Caption className="caption-1">
                    <h1 className="featured-headers-col">Featured<br/> Collection</h1>
                    <h2>$999.99</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="showcase-height">
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="showcase-height">
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Shop