import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BarLoader from "src/Animations/BarLoader";
import PageTransition from "src/Animations/PageTransition";

const FundingResult = () => {
  const [data, setData] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState();
  const { docId } = useParams();

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://ifbc-dotnet-backend-env.eba-k4f4mzqg.us-east-1.elasticbeanstalk.com/api/fundcalculator/${docId}`
    );

    if (response.status === 200) {
      setData(response.data);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    data.downPayment = parseInt(data.downPayment, 10);
    data.houseHold = parseInt(data.houseHold, 10);
    data.debtPayments = parseInt(data.debtPayments, 10);
    data.totalNet = parseInt(data.totalNet, 10);
    const debtResult = Math.floor(
      (data.debtPayments / (data.houseHold / 12)) * 100
    );

    setResult(debtResult);
  }, [data, loading]);
  return (
    <PageTransition>
      <div
        id="top-text"
        className="p-10  relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 md:min-h-[400px] before:z-10"
        style={{
          background:
            "url(https://ifbcreact.s3.us-east-1.amazonaws.com/images/banners/results.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="max-md:text-3xl md:text-5xl text-white font-bold text-center z-20">
          PRE-QUALIFY FOR FUNDING{" "}
        </h1>

        <h1 className="max-md:text-md md:text-3xl text-white  font-bold text-center z-20">
          Determine How Much And What Sources Of Options Are Available To You
        </h1>
      </div>
      <div className="bg-white p-10">
        <h1 className="text-3xl text-left">
          <span className="font-bold">Results</span>
        </h1>
        {loading ? (
          <p className="text-xl text-left text-custom-heading-color mt-5">
            Your net worth is: ${data.totalNet} <br />
            Your debt to income ratio is: {result}%
            {result <= 35 ? (
              <>
                <br />
                <br />
                Low - Your debt to income ratio is what lending institutions
                prefer to see. Great job!
                <br />
                <br />
                Your maximum total investment is ${data.debtPayments}. Look for
                franchises below this number in initial investment.
                <br />
                <br />
                Congratulations! It appears as though you have some good
                options, BUT there is a delicate order to follow regarding
                franchise funding and franchise selection. Schedule a free
                consultation with a franchise expert to understand the most
                strategic paths forward and what to avoid as you begin the
                journey to franchise ownership.
                <br />
                <br />
                You have some good options, BUT you have to carefully proceed.
                Schedule a free consultation with a funding expert to understand
                the most strategic paths forward. The order in which you act
                next changes your ability to get approved so learn the proper
                order by talking to an expert now.
                <br />
                <br />
                Book a meeting with a specialist{" "}
                <a className="underline" href="https://calendly.com/info-ifbc">
                  here
                </a>
                .
              </>
            ) : (
              <>
                <br />
                <br />
                High - Your debt to income ratio is what lending institutions
                prefer to see. Great job!
                <br />
                <br />
                Your maximum total investment is ${data.debtPayments}. Look for
                franchises below this number in initial investment.
                <br />
                <br />
                Funding your franchise may have some complications based on the
                answers provided. There still may be good options but more
                details will need to be provided to see which apply. Follow
                these steps:
                <br />
                <br />
                "Take free credit soft pull and receive a pre-screening report".
                Receive your report with 24-48 hours. This credit report will
                not affect your credit because it is a soft pull. This report is
                evaluated by our 3rd party financial strategists and the results
                are based on the current lending conditions as well as past
                results from lenders with profiles similar to yours.
                <br />
                <br />
                If you would like to learn how you may qualify in the future you
                may reach out to{" "}
                <a className="underline" href="tel:(800) 927-0203">
                  (800) 927-0203
                </a>{" "}
                or book a meeting with a specialist{" "}
                <a className="underline" href="https://calendly.com/info-ifbc">
                  here
                </a>
                .
              </>
            )}
          </p>
        ) : (
          <BarLoader bgcolor={"blue"} />
        )}
      </div>
    </PageTransition>
  );
};

export default FundingResult;
