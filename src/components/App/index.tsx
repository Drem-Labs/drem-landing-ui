import React from 'react';
import './index.css';
import Nav from '../Nav'
import Welcome from '../Welcome'
export {};

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <header>
        <Nav></Nav>
      </header>
      <main className="flex-grow">
        <Welcome></Welcome>
      </main>

    </div>

  );
}

export default App;