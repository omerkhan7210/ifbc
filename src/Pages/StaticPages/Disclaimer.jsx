import React from "react";
import PageTransition from "src/Animations/PageTransition";

const Disclaimer = () => {
  const disclaimerData = [
    {
      heading: "1. Consultancy Services",
      text: `Our consultancy services are designed to provide general advice and guidance on international franchising. We do not guarantee specific outcomes or profitability from following our recommendations. Clients are advised to conduct their own due diligence and seek legal and financial advice where necessary before making any business decisions.`,
    },
    {
      heading: "2. Accuracy of Information",
      text: `While we strive to provide accurate and up-to-date information, we cannot guarantee the completeness or reliability of all content provided. The franchising landscape can change rapidly, and our materials may not always reflect the latest developments. Users should verify information independently before acting upon it.`,
    },
    {
      heading: "3. Financial and Legal Advice",
      text: `Our consultancy does not replace professional legal, financial, or accounting advice. Clients are encouraged to consult with qualified professionals regarding any legal, financial, or tax implications related to franchising activities in specific jurisdictions.`,
    },
    {
      heading: "4. Limitation of Liability",
      text: `We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our consultancy services or reliance on any information provided. This includes but is not limited to financial loss, business interruption, or damage to reputation.`,
    },
    {
      heading: "5. Client Responsibilities",
      text: `Clients are responsible for their own decisions and actions based on the advice and information provided by our consultancy. We cannot be held responsible for the success or failure of any franchising venture undertaken by our clients.`,
    },
    {
      heading: "6. Changes to Services",
      text: `We reserve the right to modify, suspend, or discontinue any aspect of our consultancy services without prior notice. This includes changes to pricing, service offerings, or the availability of resources.`,
    },
    {
      heading: "7. Confidentiality",
      text: `We respect the confidentiality of our clients' information and will not disclose sensitive business details without permission, except as required by law.`,
    },
    {
      heading: "8. Governing Law",
      text: `This disclaimer is governed by and construed in accordance with the laws of USA. Any disputes arising from the use of our consultancy services will be subject to the exclusive jurisdiction of the courts in USA.`,
    },
    {
      heading: "9. Contact Information",
      text: `For questions or concerns regarding this disclaimer or our consultancy services, please contact us at info@ifbc.co`,
    },
  ];

  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background:
            "url(https://ifbcreact.s3.us-east-1.amazonaws.com/images/banners/disclaimer.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-3xl md:text-7xl text-white font-bold text-center z-20">
          Disclaimer
        </h1>
      </div>

      <div className="max-md:p-2 md:p-16 ">
        {disclaimerData.map((section, index) => (
          <DisclaimerSection
            key={index}
            heading={section.heading}
            text={section.text}
          />
        ))}
      </div>
    </PageTransition>
  );
};
const DisclaimerSection = ({ heading, text }) => (
  <div className="my-8">
    <h2 className="disclaimer-heading">{heading}</h2>
    <p className=" max-md:text-[10px] md:text-lg">{text}</p>
  </div>
);

export default Disclaimer;
