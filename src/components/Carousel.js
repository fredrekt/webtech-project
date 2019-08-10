import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import banner2 from '/Users/Acer/Desktop/webtech-project/src/img/nike-shoes.jpg'
import finalbanner from '/Users/Acer/Desktop/webtech-project/src/img/banner1-final.png'
import banner3 from '/users/acer/Desktop/webtech-project/src/img/nike-shoes-3.jpg'
const Banner = () =>{
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={finalbanner}
      alt="First slide"
    />
    <Carousel.Caption style={{"text-align":"right", "margin-bottom":"700px"}}>
      <h3 style={{"text-transform":"uppercase","font-size":"80px","font-style":"bold"}}>shoe shack</h3>
      <p>A place to buy shit and sell them online and dont give a shit</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}


export default Banner