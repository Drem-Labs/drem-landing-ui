import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
export {};

function App() {
  return (
    <div className="w-screen">

      <div className="fixed inset-x-0 top-0 z-30">
        <Nav></Nav>  
      </div>

      <div className="w-screen">
        <Hero></Hero>  
      </div>

      <div className="relative bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)] z-30">
        <Subheading text={'Text for subheading #1'} image={' '}/>
        <Subheading text={'Text for subheading #2'} image={' '}/>
        <Subheading text={'Text for subheading #2'} image={' '}/>
      </div>

    </div>
    

  );
}

export default App;