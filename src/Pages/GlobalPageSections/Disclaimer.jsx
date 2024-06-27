import React from "react";
import PageTransition from "src/Animations/PageTransition";

const Disclaimer = () => {
  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background: "url(/images/accounts/disclaimer.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-3xl md:text-7xl text-white font-bold text-center z-20">
          Disclaimer
        </h1>
      </div>

      <div className="mx-16">
        <h2 className="disclaimer-heading">1. Consultancy Scope</h2>

        <p className="max-md:text-[10px] md:text-[15px]">
          Our consultancy services are designed to provide general advice and
          guidance on international franchising. We do not guarantee specific
          outcomes or profitability from following our recommendations. Clients
          are advised to conduct their own due diligence and seek legal and
          financial advice where necessary before making any business decisions.
        </p>
        <h2 className="disclaimer-heading">2. Accuracy of Information</h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          While we strive to provide accurate and up-to-date information, we
          cannot guarantee the completeness or reliability of all content
          provided. The franchising landscape can change rapidly, and our
          materials may not always reflect the latest developments. Users should
          verify information independently before acting upon it.
        </p>
        <h2 className="disclaimer-heading">3. Financial and Legal Advice </h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          Our consultancy does not replace professional legal, financial, or
          accounting advice. Clients are encouraged to consult with qualified
          professionals regarding any legal, financial, or tax implications
          related to franchising activities in specific jurisdictions.
        </p>
        <h2 className="disclaimer-heading">4. Limitation of Liability </h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          We are not liable for any direct, indirect, incidental, consequential,
          or punitive damages arising out of your use of our consultancy
          services or reliance on any information provided. This includes but is
          not limited to financial loss, business interruption, or damage to
          reputation.
        </p>
        <h2 className="disclaimer-heading">5. Client Responsibilities </h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          Clients are responsible for their own decisions and actions based on
          the advice and information provided by our consultancy. We cannot be
          held responsible for the success or failure of any franchising venture
          undertaken by our clients.
        </p>
        <h2 className="disclaimer-heading">6. Changes to Services </h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          We reserve the right to modify, suspend, or discontinue any aspect of
          our consultancy services without prior notice. This includes changes
          to pricing, service offerings, or the availability of resources.
        </p>
        <h2 className="disclaimer-heading">7. Confidentiality</h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          We respect the confidentiality of our clients' information and will
          not disclose sensitive business details without permission, except as
          required by law.
        </p>
        <h2 className="disclaimer-heading">8. Governing Law </h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          This disclaimer is governed by and construed in accordance with the
          laws of [Jurisdiction]. Any disputes arising from the use of our
          consultancy services will be subject to the exclusive jurisdiction of
          the courts in [Jurisdiction].
        </p>
        <h2 className="disclaimer-heading">9. Contact Information </h2>
        <p className="max-md:text-[10px] md:text-[15px]">
          For questions or concerns regarding this disclaimer or our consultancy
          services, please contact us at <b>"harjeet@gmail.com"</b>.
        </p>
      </div>
    </PageTransition>
  );
};

export default Disclaimer;
