
import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
import Footer from '../Footer';
export {};

function App() {
  return (
    <div className="w-screen">

      <div className="fixed inset-x-0 top-0 z-[60]">
        <Nav></Nav>  
      </div>

      <div className="w-screen">
        <Hero></Hero>  
      </div>

      <div className="relative h-screen h-full bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)] z-50">

        <div className="text-left pt-[200px]">
          <Subheading title={'Find Your Community'} text={'Take your first step in web3, together; with Drem, the more you engage with your community, the more you earn'} image={'../../images/sc-ui/post-sc-1.png'} img_pos={"float-right mr-[123px] pt-[373px]"} width={"920"} height={"377.03"} text_pos={"w-1/3 ml-[140px] pt-[373px]"} title_pos={"mb-[25px]"}/>
        </div>
        
        <div className="text-right">
          <Subheading title={'Share Your Journey'} text={'Explore all activity in one simple interface; own, learn, and share every step of your experience'} image={'./images/sc-ui/user-strats-sc-1.png'} img_pos={"float-left align-middle ml-[212px] mr-[17px]"} width={"879"} height={"424"} text_pos={"place-content-end -w-1/8 mr-[204px] pb-[100px]"} title_pos={"mb-[25px]"}/>
        </div>

        <div className="text-left">
          <Subheading title={'Build Your Frontier'} text={'Create or mirror the best investment strategies; you don\'t need to be an expert to invest like one'} image={'images/sc-ui/portfolio-sc-2.png'} img_pos={"float-right align-middle mr-[250px] -mt-[168px] "} width={"541"} height={"681.87"} text_pos={"w-1/3 ml-[250px]"} title_pos={"mb-[25px]"}/>
        </div>

        <Footer></Footer>
      </div>

    </div>
    

  );
}

export default App;


