import React from 'react';
import './index.css';
import Hello from '../../hello-world';
import Footer from '../Footer';
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
      <Footer></Footer>
    </div>

  );
}

export default App;