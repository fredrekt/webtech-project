import React from 'react';
import Menu from './components/Navbar'
import Banner from './components/Carousel'
import Content from './components/Jumbotron'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Clients from './components/Clients'
import Register from './components/Register'
import Shop from './components/Shop'
import About from './components/About'
import Team from './components/Team'
import HoursRendered from './components/HoursRendered'


function App() {
  return (
    <div className="App">
      <Menu/>
       {/* About Section Starts here
      Add to browser router - /About */}


      {/* <About/>
      <Team/>
      <HoursRendered/> */}


      {/* About Section Ends here */}
     
      
      <Banner/>
      <Content/>
      <Features/>
      <Contact/>
      <Clients />

      {/*
        commented 50% done - add containers for the items (shoes)
      */}
      {/* <Shop/> */}
      {/* Register Component */}
      {/* <Register/> */}
      {/* Register Component Ends here */}


      <Footer/>
    </div>
  );
}

export default App;
