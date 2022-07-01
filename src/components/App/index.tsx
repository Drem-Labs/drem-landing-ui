import React from 'react';
import './index.css';
import Hello from '../../hello-world';
import Nav from '../Nav'
export {};

function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <div className='p-4'>
        <Hello></Hello>
    </div>
    </div>

  );
}

export default App;