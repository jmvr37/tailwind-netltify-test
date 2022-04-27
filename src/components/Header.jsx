import React from 'react';
import lottie from "lottie-web";
import digital from "../assets/lottie-animations/loading-circles.json";
import prisma from '../assets/images/subtle-prism.svg';
import 'animate.css';

// var style= {  
//   backgroundImage: "url(" + prisma  + ")",
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
// };



const Header = () =>{
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#digital"),
          animationData: digital,
        });
      }, []);


    return(
<>


  {/* <div class="w-full h-auto content-end md:w-screen h-auto py-8 px-0 content-center lg:w-screen h-full py-8 px-0 content-center"  id="digital">
  </div> */}
  <div  class=" h-full w-full flex justify-center items-center md: h-3/4 lg:h-screen">
    <h1 class="font-mono text-4xl text-indigo-600 py-32 animate__animated animate__zoomInDown md:text-7xl sm:text-3xl lg:text-8xl">Front-End Developer <br/> & Designer  </h1>
  </div>

        
</>
    );
}

export default Header;
