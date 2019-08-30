import React from 'react'
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import banner2 from '../img/nike-shoes.jpg'
import finalbanner from '../img/banner1-final.png'
import banner3 from '../img/nikeshoes.png'
import Button from 'react-bootstrap/Button'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import { pulse } from 'react-animations'
import { flash } from 'react-animations'
import { bounceInLeft} from 'react-animations'
import { bounceInDown } from 'react-animations'

const bounceAnimation = keyframes`${bounce}`
const pulseAnimation = keyframes`${pulse}`
const flashAnimation = keyframes`${flash}`
const bounceLeftAnimation = keyframes`${bounceInLeft}`
const bounceInDownAnimation = keyframes`${bounceInDown}`

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation}
`;
const BouncyDiv2 = styled.div`
  animation: 4s ${pulseAnimation}
`;
const FlashyDiv = styled.div`
  animation: 1s ${flashAnimation}
  `;
const BouncyLeftDiv = styled.div`
  animation: 3s ${bounceLeftAnimation}
  `;
const BouncyLeftDiv2 = styled.div`
  animation: 4s ${bounceLeftAnimation}
  `;
const BouncyLeftDiv3 = styled.div`
  animation: 5s ${bounceLeftAnimation}
  `;
const BouncyDown = styled.div`
  animation: 2s ${bounceInDownAnimation}
  `;
const BouncyDown2 = styled.div`
  animation: 4s ${bounceInDownAnimation}
  `;





const Banner = () =>{
    return(
        <Carousel>
  <Carousel.Item className="carousel-height">
    <img
      className="d-block w-100"
      src={finalbanner}
      alt="First slide"
    />
    <Carousel.Caption style={{'top':'0','bottom':'auto','left':'auto','margin-top':'5%'}}>
      <BouncyDiv><h3 style={{"text-transform":"uppercase","font-size":"60px","font-style":"bold","font-family":'Changa, sans-serif'}}>shoe shack</h3></BouncyDiv>
      <BouncyDiv2><p style={{"font-size":"20px", "margin-top":"-20px"}}>Choose Shoes. Buy Shoes. Get Shoes.</p></BouncyDiv2>
      <FlashyDiv><p style={{"font-size":"15px", "margin-top":"-20px"}}>The Nike Jones Twice Apex Legends Underlord</p></FlashyDiv>
      {/* <Button size="lg"variant="outline-secondary">GET ON</Button> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-height">
    <img
      
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />
    <Carousel.Caption className="align-top-left">
      <BouncyLeftDiv><h3 style={{'text-transform':'uppercase', 'font-family':'Changa, sans-serif','font-size':'40px'}}>Nike Ultraboost <br/>Hyperspace</h3></BouncyLeftDiv>
      <BouncyLeftDiv2><p style={{'font-size':'20px','margin-top':'-15px'}}>Wear and Tear by Kobe Bryant Paras</p></BouncyLeftDiv2>
      <BouncyLeftDiv3><p style={{'font-size':'15px','margin-top':'-17px'}}>This shoes is used for Training, Running and Body Building. Experts say <br/>that using this shoes boosts' performance as a person or an Athlete.</p></BouncyLeftDiv3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-height">
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
  
    <Carousel.Caption style={{"top":'0','right':'auto','margin-top':'10%'}}>
      <BouncyDown><h3 style={{"font-family":"Changa, sans-serif","text-transform": "uppercase","font-size":"40px"}}>Nike Kaishi Sports</h3></BouncyDown>
      <BouncyDown2><p style={{"font-size":"20px","margin-top":"-20px"}}>Made by Athletes, for athletes</p></BouncyDown2>
    </Carousel.Caption>
  
  </Carousel.Item>
  
</Carousel>
    )
}


export default Banner