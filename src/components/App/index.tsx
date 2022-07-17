
import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
import Footer from '../Footer';


export {};

function App() {
  return (
    <div className="w-screen overflow-hidden">

      <div className="fixed inset-x-0 top-0 z-30">
        <Nav></Nav>
      </div>

      <div className="w-screen">
        <Hero></Hero>
      </div>

      <div className="relative bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)] z-30">

        <div className="sm:text-left">
          <Subheading layout={'sm:flex sm:flex-row'}
                      title={'Find Your Community'}
                      text={'Take your first step in web3, together; with Drem, the more you engage with your community, the more you earn'}
                      image={'../../images/sc-ui/post-sc-1.png'}
                      img_pos={"object-contain mr-96 pl-24 pt-[150px] 2xl:pt-[373px]"}
                      width={"817 2xl:1225"}
                      height={"217 2xl:433"}
                      text_pos={"sm:w-1/3 ml-3 sm:ml-[150px] 2xl:ml-[187px] pt-[150px] 2xl:pt-[373px]"}
                      title_pos={"mb-[25px]"}
                      line_pos={"my-[180px] 2xl:my-[300px]"}
          />
        </div>


        <div className="sm:text-right">
          <Subheading layout={'sm:flex sm:flex-row-reverse'}
                      title={'Share Your Journey'}
                      text={'Explore all activity in one simple interface; own, learn, and share every step of your experience'}
                      image={'./images/sc-ui/user-strats-sc-1.png'}
                      img_pos={"object-contain ml-[130px] 2xl:ml-[212px] mr-[40px]"}
                      width={"640 2xl:879"}
                      height={"424"}
                      text_pos={"place-content-end -w-1/8 mr-[130px] 2xl:mr-[209px] pb-[30px]"}
                      title_pos={"mb-[25px]"}
                      line_pos={"my-[220px] 2xl:my-[230px]"}
          />
        </div>

        <div className="sm:text-left">
          <Subheading layout={'sm:flex sm:flex-row'}
                      title={'Build Your Frontier'}
                      text={'Create or mirror the best investment strategies; you don\'t need to be an expert to invest like one'}
                      image={'images/sc-ui/portfolio-sc-2.png'}
                      img_pos={"object-contain float-right pl-24 mt-[40px] 2xl:mt-[120px]"}
                      width={"541"}
                      height={"681.87"}
                      text_pos={"w-1/3 ml-[250px]"}
                      title_pos={"mb-[25px] mt-[100px]"}
                      line_pos={"my-[200px] 2xl:my-[400px]"}
          />
        </div>
        <Footer></Footer>
      </div>

    </div>


  );
}

export default App;


