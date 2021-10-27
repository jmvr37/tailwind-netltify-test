import React from 'react';
import Keyboard from '../assets/images/keyboard-regular.svg';



const Profile = () =>{
    return (
      <>
  <section class="flex flex-wrap justify-center" id="profile">
  
  <div class="flex justify-center w-full md:w-3/4 px-4 text-center lg:w-3/4">
              <div class="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-green-400 to-blue-500 w-full mb-8 shadow-lg rounded-lg">
                <div class="flex-auto px-4 py-5">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-lightBlue-400 animate-pulse">
                  <img alt="..." src={Keyboard} class="lg:w-16 h-16"/>
                  </div>
                  <h6 class="text-3xl font-mono">Hi, I'm Jose </h6>
                  <p class="sm:text-sm mt-2 mb-4 font-light md:text-2xl mt-2 mb-4">
                  Since the beginning of my journey as a full stack developer 2 years ago, I've done over 10 projects using different technologies, such as Javascript, PHP, and ReactJS.
                  I have worked with talented people to develop digital products for a few non-profit organizations. A self-taught UI/UX designer with a natural curiosity,
                  I'm always seeking to improve my skills.
                  </p>
                </div>
              </div>
            </div>
    </section>


      </>
    );

}

export default Profile;