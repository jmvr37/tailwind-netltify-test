import React from 'react';
import lottie from "lottie-web";
import digital from "../assets/lottie-animations/digital-media-3d.json";


const Header = () =>{
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#digital"),
          animationData: digital,
        });
      }, []);
    return(
<>

<section class="flex flex-col justify-center">
  <div class="w-full h-auto content-end md:w-screen h-auto py-8 px-0 content-center lg:w-screen h-full py-8 px-0 content-center"  id="digital">
  </div>
</section>
        
</>
    );
}

export default Header;
