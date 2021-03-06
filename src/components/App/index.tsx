import React from 'react';
import './index.css';
import Nav from '../Nav'
import Hero from '../Hero'
import Subheading from '../Subheading'
import Footer from '../Footer';


export {};

function App() {
  return (
    <div className="w-full overflow-hidden">

      <div className="fixed inset-x-0 top-0 z-30">
        <Nav></Nav>
      </div>

      <div className="w-screen">
        <Hero></Hero>
      </div>

      <div className="relative bg-white shadow-[0_-8px_6px_6px_rgba(0,0,0,0.25)] z-30">

        <div className="text-center sm:text-left">
          <Subheading layout={'sm:flex sm:flex-row'}
                      title={'Find Your Community'}
                      text={'Take your first step in web3, together; with Drem, the more you engage with your community, the more you earn'}
                      image={'../../images/sc-ui/post-sc-1.png'}
                      img_pos={"object-contain w-[350px] sm:w-1/2 lg:w-7/12 xl:w-1/2 2xl:w-[1050px] sm:mr-16 mx-auto px-8 sm:pl-16 lg:-ml-16 xl:mr-36 lg:pl-32 pt-16 sm:pt-36 2xl:pt-[360px]"}
                      text_pos={"ml-8 mr-8 sm:mr-0 sm:ml-16 lg:ml-24 xl:ml-36 pt-36 2xl:pt-96"}
                      title_pos={"mb-0 lg:mb-[25px]"}
                      line_pos={"mt-[120px] sm:my-[180px] 2xl:my-[300px]"}
          />
        </div>

        <div className="text-center sm:text-right">
          <Subheading layout={'sm:flex sm:flex-row-reverse'}
                      title={'Share Your Journey'}
                      text={'Explore all activity in one simple interface; own, learn, and share every step of your experience'}
                      image={'./images/sc-ui/user-strats-sc-1.png'}
                      img_pos={"object-contain w-[350px] sm:w-7/12 xl:w-1/2 2xl:w-[1050px] sm:ml-12 lg:ml-16 xl:ml-36 sm:pr-16 mx-auto px-8 sm:pl-0 md:pr-8"}
                      text_pos={"ml-8 mr-8 sm:ml-0 sm:mr-16 xl:mr-36 pt-24 sm:pt-36 sm:pt-8 pb-8 3xl:pb-0"}
                      title_pos={"mb-0 lg:mb-[25px]"}
                      line_pos={"mt-[150px] sm:my-[180px] 2xl:my-[300px]"}
          />
        </div>

        <div className="text-center sm:text-left">
          <Subheading layout={'sm:flex sm:flex-row'}
                      title={'Build Your Frontier'}
                      text={'Create or mirror the best investment strategies; you don\'t need to be an expert to invest like one'}
                      image={'images/sc-ui/portfolio-sc-2.png'}
                      img_pos={"object-contain w-[300px] sm:w-1/2 xl:w-1/3 2xl:w-[650px] sm:mr-16 lg:mr-16 xl:mr-72 2xl:mr-96 mx-auto px-8 2xl:pl-48 pt-8 sm:pt-0"}
                      text_pos={"ml-8 mr-8 sm:mr-0 sm:ml-16 lg:ml-24 xl:ml-72 sm:pb-16"}
                      title_pos={"mb-0 lg:mb-[25px] mt-[100px] 3xl:mt-[150px]"}
                      line_pos={"mt-[150px] sm:mt-[180px] 2xl:mt-[300px]"}
          />
        </div>
        <Footer></Footer>
      </div>

    </div>


  );
}

export default App;


