import React from 'react';
import Profile3 from '../assets/images/profile3.png';
import waves from '../assets/images/wave.svg';

var style= {  
  backgroundImage: "url(" + waves  + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const Profile = () =>{
    return (
      <>
 
  <section style= { style } class="flex flex-wrap justify-center" id="profile">

  <div class="flex items-center justify-end h-5/6">
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 mb-20 max-w-md">
     <img class="mb-3 w-40 h-40 rounded-full shadow-lg mx-auto max-w-120-px" src={Profile3} alt="product designer"/>
     <h1 class="text-lg text-gray-700"> Jose Valenzuela</h1>
     <h3 class="text-sm text-gray-400 "> Front-End Dev </h3>
     <p class="text-sm text-gray-400 mt-4">Since the beginning of my journey as a front-end developer 2 years ago, I've done over 10 projects using different technologies, such as Javascript, php, and ReactJS.
                  I have worked with talented people to develop digital products for a few non-profit organizations. A self-taught UI/UX designer with a natural curiosity,
                  I'm always seeking to improve my skills. </p>
                  <a href="#projects">
     <button  class="bg-indigo-600 shadow-lg shadow-indigo-500/70 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Projects</button></a>
   </div>
 </div>

  
  {/* <div class="flex justify-center w-full py-7 md:w-3/4 px-4 text-center lg:w-3/4">
              <div class="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-green-400 to-blue-500 w-full mb-8 shadow-lg rounded-lg">
                <div class="flex-auto px-4 py-5">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-lightBlue-400 animate-pulse">
                  <img alt="..." src={Keyboard} class="lg:w-16 h-16"/>
                  </div>
                  <h6 class="text-3xl font-mono">Hi, I'm Jose</h6>
                  <p class="sm:text-sm mt-2 mb-4 font-light md:text-2xl mt-2 mb-4">
                  Since the beginning of my journey as a full stack developer 2 years ago, I've done over 10 projects using different technologies, such as Javascript, php, and ReactJS.
                  I have worked with talented people to develop digital products for a few non-profit organizations. A self-taught UI/UX designer with a natural curiosity,
                  I'm always seeking to improve my skills.
                  </p>
                </div>
              </div>
            </div> */}
</section>


      </>
    );

}

export default Profile;