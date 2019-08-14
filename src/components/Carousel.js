import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import banner2 from '/Users/Acer/Desktop/webtech-project/src/img/nike-shoes.jpg'
import finalbanner from '/Users/Acer/Desktop/webtech-project/src/img/banner1-final.png'
import banner3 from '/Users/acer/Desktop/webtech-project/src/img/nikeshoes.png'
const Banner = () =>{
    return(
        <Carousel>
  <Carousel.Item className="carousel-height">
    <img
      className="d-block w-100"
      src={finalbanner}
      alt="First slide"
    />
    <Carousel.Caption style={{'top':'0','bottom':'auto','left':'auto'}}>
      <h3 style={{"text-transform":"uppercase","font-size":"60px","font-style":"bold","font-family":'Changa, sans-serif'}}>shoe shack</h3>
      <p style={{"font-size":"20px", "margin-top":"-20px"}}>Choose Shoes. Buy Shoes. Get Shoes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-height">
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{"font-family":"Changa, sans-serif","text-transform": "uppercase","font-size":"40px"}}>Nike Kaishi Sports</h3>
      <p style={{"font-size":"20px","margin-top":"-20px"}}>Made by Athletes, for athletes</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-height">
    <img
      
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />
    <Carousel.Caption className="align-top-left">
      <h3 style={{'text-transform':'uppercase', 'font-family':'Changa, sans-serif','font-size':'40px'}}>Third slide label</h3>
      <p style={{'font-size':'20px','margin-top':'-15px'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}


export default Banner