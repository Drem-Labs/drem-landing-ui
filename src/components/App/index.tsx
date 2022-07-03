import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
export {};

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <header>
        <Nav></Nav>
      </header>
      <main className="flex-grow">
        <Hero></Hero>
      </main>

    </div>

  );
}

export default App;