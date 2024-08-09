import React from "react";
import { Link } from "react-router-dom";

const BecomeAConsultant = () => {
  return (
    <div>
      {/* Become a franchise consultant with IFBC section  */}
      <h1 className="font-bold text-center text-custom-dark-blue max-md:text-xl md:text-3xl mb-10 mt-10">
      Become a franchise consultant with IFBC.
      </h1>
      <section className="max-md:w-[90%] md:w-[75%] flex flex-col my-8 mx-auto">
        <article className="flex justify-center max-md:flex-col">
          <p className="text-lg text-justify leading-10 max-md:mb-5">
          <p>
  <b>Are you looking for a better career path?</b></p>
  <p>Would you like to help other people start businesses and help your community grow?</p>
  <p>Are you interested in joining a franchise industry leader with experience, expertise, and ethics?</p>
  <p className="mt-5">If you answered yes to any of the above questions, an IFBC franchise consulting  could be your ticket to long-term success.</p>
<h3 className="font-bold my-5">About IFBC</h3>
<p>IFBC isn’t just a consultant network—it’s where ambition meets opportunity. We directly match individuals with elite franchises and are actively shaping the future with a dynamic team of franchise specialists. Choose IFBC for integrity, excellence, and a personalized approach to your entrepreneurial journey.</p>
          </p>
          <img
            src="/images/office-handshake.webp"
            alt="handshake"
            className="md:ml-10 md:w-[30%] md:h-[30%] max-md:w-[100%]"
          />
        </article>
        <Link to="/apply-now">
          <button className="candidate-btn md:w-[25%] max-md:w-full max-md: mt-6">
            See if you Qualify
          </button>
        </Link>
      </section>

      {/* Video section */}
      <div className='flex justify-center'>
      <video 
      src='/video/becomeaconsultant.mp4' 
      type="video/mp4"
      autoPlay
      controls
      muted={true}
      loop
      className='rounded-3xl max-md:w-[90%] max-md:h-[90%] mb-10 md:w-[75%] md:h-[68%]'
      >
      </video>
    </div>

    {/* The Benefits of Working with Us section */}
    <section className="bg-custom-dark-blue/30 flex justify-center mb-10">
<div className="max-md:w-[90%] md:w-[75%]">
  <h1 className="font-bold text-center candidate-sub-heading max-md:text-xl md:text-3xl mb-10 mt-10">
  The Benefits of Working with Us
  </h1>
  <p className="candidate-label">
  <b>Franchise with Freedom: No middlemen, no costs at IFBC!</b>
  </p>
  <p className="mt-6 candidate-label">
  When you own an IFBC franchise consulting business, you will be on the front lines of a thriving industry. Franchising is one of the largest industries in North America. As an IFBC franchise consultant, you will work with business buyers and sellers to close franchise business transactions, resulting in a win-win situation for everyone involved.
  </p>
  <p className="candidate-label">
  <b>Why become an IFBC franchise consultant?</b>
  </p>
  <p className="mt-6 candidate-label">
  When you own an IFBC franchise consulting business, you will be on the front lines of a thriving industry. Franchising is one of the largest industries in North America. As an IFBC franchise consultant, you will work with business buyers and sellers to close franchise business transactions, resulting in a win-win situation for everyone involved.
  </p>
  <p className="candidate-label">
  <b>What do IFBC franchise consultants do?</b>
  </p>
  <p className="mt-6 candidate-label">
  An IFBC Franchise Consultant's role is to conduct one-on-one consultations with clients interested in purchasing a franchise. IFBC's proprietary technology equips an IFBC franchise consultant with the tools to identify opportunities that align with a prospect's ideal business. The IFBC Franchise Consultant is not a salesperson but rather a matchmaker between the client and the right franchisor.
Career counselors, outplacement consultants, attorneys, accountants, bankers, and other clients looking for quality franchises can expect IFBC Franchise Consultants to curate an ongoing referral network. They also assist clients in locating legal, accounting, and financial resources for specific franchises.
  </p>
  <div className="max-md:w-[90%] md:w-[75%]">
<h2 className="font-bold text-center candidate-sub-heading max-md:text-xl md:text-3xl md:mb-10 md:mt-10 md:ml-32">
Our Consultants C.A.R.E.
  </h2>
  <div className="flex max-md:w-[90%] md:w-[75%] max-md:flex-col mx-auto gap-10 mb-20">
    <div1 className="flex flex-col mx-5 md:w-[25%] max-md:w-[100%]">
      <img src="./images/collaborative.png" alt="collaborative" className="h-36 w-36"/>
      <h3>Collaborative</h3>
    </div1>
    <div2 className="flex flex-col mx-5 md:w-[25%] max-md:w-[100%]">
    <img src="./images/accountable.png" alt="accountable" className="h-36 w-36"/>
    <h3>Accountable</h3>
    </div2>
    <div3 className="flex flex-col mx-5 md:w-[25%] max-md:w-[100%]">
    <img src="./images/respectful.png" alt="respectful" className="h-36 w-36"/>
    <h3>Respectful</h3>
    </div3>
    <div4 className="flex flex-col mx-5 md:w-[25%] max-md:w-[100%]">
    <img src="./images/ethical.png" alt="ethical" className="h-36 w-36"/>
    <h3 className="ml-4">Ethical</h3>
      </div4>
  </div>
</div>
</div>
    </section>

    {/* How Much Does It Cost to Become a Franchise Consultant section */}
    <section className="max-md:w-[90%] md:w-[75%] flex max-md:flex-col mx-auto my-8 gap-10">
<div className="md:w-[50%] max-md:w-full">
  <img src="./images/cost.webp" alt="How much does it cost you" className="md:w-[100%] md:h-[100%]" />
</div>
<div className="md:w-[50%] max-md:w-full">
  <div>
  <h2 className="text-custom-consultant">GETTING STARTED</h2>
  </div>
  <div className="bg-custom w-[100%] rounded-xl p-4">
  {/* <h2 className="candidate-sub-heading">Getting Started</h2> */}
  <h3 className="candidate-sub-heading">How Much Does It Cost to Become a Franchise Consultant?</h3>
  <p>You will be surprised to know that we are the only company in the industry that doesn’t charge any fees from our franchise consultants. While other companies charge between $25,000 and $50,000 just for training, we provide them with free access to the IFBC CRM and our website portal.</p>

  <h3 className="candidate-sub-heading">How does an IFBC franchise consultant make money?</h3>
  <p>When you become an IFBC Franchise Consultant , you will receive leads from your own local advertising programs, as well as from advertising and Internet marketing systems. Every time a client invests in a franchise business you recommend, you, as an IFBC Franchise Consultant, will receive a sizable referral fee!</p>
  </div>
  
</div>
    </section>

    {/* Frequently Asked Questions section */}
    <section className="bg-custom-dark-blue/30  flex justify-center mb-10"> 
    <div className="max-md:w-[90%] md:w-[75%] mt-4 h-52">
    <h2 className="mb-5 font-bold">Get Step-by-Step Guidance as an IFBC Franchise Consultant</h2>
    <p>Here’s a summary of the special advantages you’ll have when you join the IFBC family:
•	We offer comprehensive training both online and in-class with industry experts.
•	The company offers extensive technology tools and industry-specific CRM software.
•	An intranet communication platform for sharing best practices.
•	Databases containing useful industry information.
•	Marketing and advertising materials to help generate leads.
A franchise consulting franchise offers enormous growth potential. We can give you all the details and help you explore opportunities with IFBC. Call 90-TEAM-IFBC or book an appointment.
</p>   
    </div>   
    </section>

    </div>
  );
};

export default BecomeAConsultant;
