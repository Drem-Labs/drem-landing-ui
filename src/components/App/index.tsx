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

        <div>
          <Subheading title={'Find Your Community'} text={'Take your first step into defi, together'} image={'../../images/sc-ui/post-sc-1.png'}/>
          <Subheading title={'Share Your Journey'} text={'Explore web3 in one simple interface; own,learn, and share every step of your experience'} image={'../../images/icons/lens-svg/LENS LOGO_ copy_With Roots.svg'}/>
          <Subheading title={'Build Your Frontier'} text={'Create or mirror the best investment strategies; you don\'t need to be a pro to invest like one'} image={'images/sc-ui/portfolio-sc-1.png'}/>
        </div>

        <div className="fixed inset-x-0 top-0">
          <Nav></Nav>  
        </div>
        
      </main>
    </div>

  );
}

export default App;