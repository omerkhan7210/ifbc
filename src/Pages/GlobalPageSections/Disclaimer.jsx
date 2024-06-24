import React from "react";
import PageTransition from "src/Animations/PageTransition";

const Disclaimer = () => {
  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background: "url(/images/accounts/calculator.jpeg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-3xl md:text-5xl text-white font-bold text-center z-20">
          Disclaimer
        </h1>
      </div>
      <div className="max-md:text-sm md:text-xl font-bold">
        <p>Welcome to International Franchise Business Consultants (IFBC).</p>
        <p>
          The information provided by [Your Company Name] (referred to as "the
          Consultant") on this website is for general informational purposes
          only. All information on the site is provided in good faith; however,
          we make no representation or warranty of any kind, express or implied,
          regarding the accuracy, adequacy, validity, reliability, availability,
          or completeness of any information on the site.
        </p>

        <p>
          Under no circumstance shall the Consultant have any liability to you
          for any loss or damage of any kind incurred as a result of the use of
          the site or reliance on any information provided on the site. Your use
          of the site and your reliance on any information on the site is solely
          at your own risk.
        </p>
        <p>
          The site may contain (or you may be sent through the site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features in banners or other
          advertising. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, availability,
          or completeness by us.
        </p>
        <p>
          We do not warrant, endorse, guarantee, or assume responsibility for
          the accuracy or reliability of any information offered by third-party
          websites linked through the site or any website or feature linked in
          any banner or other advertising. We will not be a party to or in any
          way be responsible for monitoring any transaction between you and
          third-party providers of products or services.
        </p>
      </div>
      ;
    </PageTransition>
  );
};

export default Disclaimer;
