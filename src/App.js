import React from 'react';
import Menu from './components/Navbar'
import Banner from './components/Carousel'
import Content from './components/Jumbotron'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Clients from './components/Clients'
import Shop from './components/Shop'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Content/>
      <Features/>
      <Contact/>
      <Clients />
      {
        /*
          redirectory after modal login
        */
      }
      {/* <Shop/> */}




      <Footer/>
    </div>
  );
}

export default App;
