import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
export {};

function App() {
  return (
    <div className="flex min-h-screen overflow-hidden">

      <main className="flex-grow relative">
        <div>
          <Hero></Hero>  
        </div>

        <div className="relative bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)]">
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