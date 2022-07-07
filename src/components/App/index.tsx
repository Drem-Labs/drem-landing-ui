import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Background from '../Body_Background'
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

      <Background></Background>
      <div>
        <Subheading text={'Text for subheading #1'} image={' '}/>
        <Subheading text={'Text for subheading #2'} image={' '}/>
        <Subheading text={'Text for subheading #2'} image={' '}/>
      </div>

    </div>
    

  );
}

export default App;