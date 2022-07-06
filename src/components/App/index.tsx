import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import background from '/images/photos/nobg-wide-final-1440p.png'
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

    </div>

  );
}

export default App;