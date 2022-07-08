
import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
import Footer from '../Footer';
export {};

// function splitLine(props: any) {
//   const text = props.text;
//   const newText = text.split('\n').map((str: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => <p>{str}</p>);
//   return newText;
// }

function App() {
  return (
    <div className="w-screen">

      <div className="fixed inset-x-0 top-0 z-30">
        <Nav></Nav>  
      </div>

      <div className="w-screen">
        <Hero></Hero>  
      </div>

      <div className="relative bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)] z-30">

        
        <div className="text-left pt-[200px]">
          <Subheading title={'Find Your\nCommunity'} text={'Take your first step in web3, together; with\nDrem, the more you engage with your\ncommunity, the more you earn'} image={'../../images/sc-ui/post-sc-1.png'} img_pos={"float-right mr-[123px] pt-[373px]"} width={"920"} height={"377.03"} text_pos={"w-1/3 ml-[123px] pt-[373px]"} title_pos={"mb-[25px]"}/>
        </div>
        
        <div className="text-right relative top-0 right-0">
          <Subheading title={'Share Your\nJourney'} text={'Explore web3 in one simple\ninterface; own, learn, and share every\nstep of your experience'} image={'./images/sc-ui/user-strats-sc-1.png'} img_pos={"float-left align-middle ml-[212px] mr-[17px]"} width={"879"} height={"424"} text_pos={"place-content-end -w-1/8 mr-[204px] pb-[100px]"} title_pos={"mb-[25px]"}/>
        </div>

        <div className="text-left">
          <Subheading title={'Build Your\nFrontier'} text={'Create or mirror the best investment\nstrategies; you don\'t need to be an\nexpert to invest like one'} image={'images/sc-ui/portfolio-sc-1.png'} img_pos={"float-right align-middle mr-[250px] -mt-[168px] "} width={"541"} height={"681.87"} text_pos={"w-1/3 ml-[250px]"} title_pos={"mb-[25px]"}/>
        </div>
        <Footer></Footer>
      </div>

    </div>
    

  );
}

export default App;


