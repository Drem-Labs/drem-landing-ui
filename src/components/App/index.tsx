import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Background from '../Body_Background'
import Subheading from '../Subheading'
export {};

function App() {
  return (
    <div className="flex min-h-screen overflow-hidden">

      <main className="flex-grow relative">
        <div>
          <Hero></Hero>  
        </div>
        <Background></Background>
        <div>
          <Subheading text={'Text for subheading #1'} image={' '}/>
          <Subheading text={'Text for subheading #2'} image={' '}/>
          <Subheading text={'Text for subheading #2'} image={' '}/>
        </div>

        <div className="fixed inset-x-0 top-0">
          <Nav></Nav>  
        </div>
      </main>
    </div>
    

  );
}

export default App;