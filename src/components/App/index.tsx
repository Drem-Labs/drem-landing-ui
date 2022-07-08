import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
import Footer from '../Footer';
export {};

function App() {
  return (
    <div className="w-screen">

      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-[60]">
        <Nav></Nav>  
      </div>

      {/* Hero */}
      <div className="w-screen">
        <Hero></Hero>  
      </div>

      <div className="absolute inset-x-0 top-0 mt-160 h-screen bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)] z-50">
        <Subheading text={'Text for subheading #1'} image={' '}/>
        <Subheading text={'Text for subheading #2'} image={' '}/>
        <Subheading text={'Text for subheading #2'} image={' '}/>
        <Footer></Footer>
      </div>

    </div>
    

  );
}

export default App;