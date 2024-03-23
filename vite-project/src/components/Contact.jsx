import React from 'react';
import Title from './Title';

const Contact = React.forwardRef((props, ref) => {
   return (
      <div ref={ref} id="Contact" className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/navkkevb"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 text-black dark:text-white bg-offWhite border-stone-900 border-2 rounded-md focus:outline-none dark:bg-stone-900 dark:border-blueGray-700"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 text-black dark:text-white bg-offWhite border-stone-900 border-2 rounded-md focus:outline-none dark:bg-stone-900 dark:border-blueGray-700"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 text-black dark:text-white bg-offWhite border-stone-900 border-2 rounded-md focus:outline-none dark:bg-stone-900 dark:border-blueGray-700"
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-stone-700 to-stone-800 drop-shadow-md hover:shadow-lg hover:cursor-pointer"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   );
});

export default Contact;