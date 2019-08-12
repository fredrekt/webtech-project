import React from 'react';
import Menu from './components/Navbar'
import Banner from './components/Carousel'
import Content from './components/Jumbotron'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Clients from './components/Clients'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Banner/>
      <Content/>
      <Features/>
      <Contact/>
      <Clients />




      <Footer/>
    </div>
  );
}

export default App;
