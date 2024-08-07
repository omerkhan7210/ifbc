import React from "react";
import { Link } from "react-router-dom";

const BecomeAConsultant = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-custom-dark-blue max-md:text-xl md:text-3xl mb-10 mt-10">Become a Consultant</h1>
      <section className="max-md:w-[90%] md:w-[75%] flex flex-col my-8 mx-auto"> 
      
      <article className="flex justify-center max-md:flex-col">
      <p className="text-lg text-justify leading-10 max-md:mb-5">
      Becoming a Registered Franchise Broker with IFBC means the end of the grind. As the owner of your own franchise brokerage business, you will never again have to spend hours in rush hour traffic commuting to work, nor will you ever have to deal with the uncertainty of corporate America.

Owning your own business means freedom and the ability to be there for your family and spend more of your time enjoying life. It also means you’ll be responsible for your own success, and if you follow the IFBC model and take advantage of all the support infrastructures we’ve put in place to help you, the sky’s the limit as to how well you can do.

<p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quidem ipsum ex assumenda libero totam fugiat facere iure, architecto impedit ratione est labore numquam placeat mollitia vitae inventore? Nulla, ipsam.

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at ipsam sit, eius placeat libero odit consequuntur optio dolorum doloremque exercitationem. Rerum expedita, earum tenetur quas error praesentium assumenda repudiandae.
</p>
      </p>
      <img src="/images/office-handshake.webp" alt="handshake" className="md:ml-10 md:w-[30%] md:h-[30%] max-md:w-[100%]" />
      </article>
      <Link to="/apply-now">
      <button className="candidate-btn md:w-[25%] max-md:w-full max-md: mt-6" >See if you Qualify</button>
      </Link>
      </section>
    <div className='flex justify-center'>
      <video 
      src='/video/becomeaconsultant.mp4' 
      type="video/mp4"
      // width="60%" 
      // height="60%"
      autoPlay
      controls
      loop
      className='rounded-3xl max-md:w-[90%] max-md:h-[90%] mb-10 md:w-[75%] md:h-[68%]'
      >
      </video>
    </div>
    </div>
  );
};

export default BecomeAConsultant;
