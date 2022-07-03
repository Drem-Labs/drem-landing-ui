import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
export {};

function App() {
  return (
    <div className="flex min-h-screen overflow-hidden">

      <main className="flex-grow relative">
        <div className="">
          <Hero></Hero>  
        </div>
        <div className="absolute inset-x-0 top-0">
          <Nav></Nav>  
        </div>
        
      </main>

    </div>

  );
}

export default App;