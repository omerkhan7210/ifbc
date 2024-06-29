import React, { useState } from "react";
import PageTransition from "src/Animations/PageTransition";

const FundingCalculator = () => {
  const [formFields, setFormFields] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const [downPayment, setDownPayment] = useState("");
  const [houseHold, setHouseHold] = useState("");
  const [debtPayments, setDebtPayments] = useState("");
  const [totalNet, setTotalNet] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [franchiseLocation, setFranchiseLocation] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [launching, setLaunching] = useState("");
  const [creditHistory, setCreditHistory] = useState("");
  const [bankruptcies, setBankruptcies] = useState("");
  const [percentage, setPercentage] = useState("");
  const [realState, setRealState] = useState("");

  const handleHouseHoldChange = (e) => {
    setHouseHold(parseInt(e.target.value));
  };

  const handleDebtPaymentsChange = (e) => {
    setDownPayment(parseInt(e.target.value));
  };
  const handleMonthlyPersonal = (e) => {
    setDebtPayments(parseInt(e.target.value));
  };
  const handleTotalNet = (e) => {
    setTotalNet(parseInt(e.target.value));
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      franchiseLocation,
      creditScore,
      launching,
      creditHistory,
      bankruptcies,
      percentage,
      realState,
      downPayment,
      houseHold,
      debtPayments,
      totalNet
    );
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: inputValue,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

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
        <h1 className="max-md:text-3xl md:text-7xl text-white  font-bold text-center z-20">
          FUND MY FRANCHISE
        </h1>
        <h3 className="max-md:text-xl md:text-3xl text-white  font-bold text-center z-20">
          Instantly See What You Could Qualify For!
        </h3>
      </div>

      <div
        id="description"
        className="flex flex-col  gap-5 my-10 md:max-w-7xl md:mx-auto max-md:mx-5"
      >
        <div className="max-md:text-sm md:text-xl my-5 text-center flex flex-col gap-3">
          <p className="text-center max-md:text-sm md:text-xl">
            By Rolling Your IRA, 401(K), 403(B), Keogh Or Other Retirement Funds
            Into A 401(K) Franchise Financing Vehicle
          </p>
          <p className="text-center">
            You can buy A Franchise, Lower Overhead and Increase Your Success
            Rate. Instead of sending interest payments to a lender, you can use
            your money to purchase advertising, buy equipment, lease a company
            van, or use it in any way that will bring you quicker profits.
          </p>
          <p>
            Eliminate Personal Liability. Use our own funds to avoid pledging
            your home or other assets as loan collateral and potentially
            jeopardizing your personal credit.
          </p>
          <p>
            Maximize Tax-Deferred Benefits. By investing your retirement funds
            into your own franchise, you can reinvest your profits tax-deferred
            in your business or in your retirement account. Build your business
            while you grow your retirement nest egg! Enjoy Flexibility.
          </p>

          <p>
            You can mix your retirement funds with personal funds or capital
            from other investors. It’s the ideal financing structure for
            husband-and-wife teams!
          </p>
          <p>
            Invest in Yourself. Unlike taking risks in the volatile stock
            market, financing your business with retirement funds is an
            investment in yourself & one that you can control and count on!
            Discover your retirement account’s true investing power (and the
            ability to finance your franchise with money you already have)
          </p>
        </div>

        <div className="flex flex-col text-center gap-4 ">
          <p className="font-bold text-center max-md:text-xl md:text-2xl">
            PRE-QUALIFY FOR FUNDING
          </p>
          <p className="font-bold text-center text-custom-dark-blue max-md:text-xl md:text-3xl">
            Determine How Much And What Sources Of Options <br></br> Are
            Available To You
          </p>
        </div>
        <form onSubmit={handleInputChange}>
          <div className="flex gap-4 max-md:flex-col md:flex-row">
            <div className="candidate-sub-childs">
              <p className="candidate-label">First Name</p>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                className="candidate-input"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Last Name</p>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="lastName"
                className="candidate-input"
                required
              />
            </div>
            <div className="candidate-sub-childs">
              <p className="candidate-label">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className="candidate-input"
                required
              />
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                What type of franchise location are you most interested in?
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div class="flex md:space-x-2 rounded-xl select-none max-md:flex-col md:flex-row">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setFranchiseLocation(e.target.value)}
                  type="radio"
                  defaultValue="Homebased"
                  name="franchiseLocation"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">Homebased</span>
              </label>

              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setFranchiseLocation(e.target.value)}
                  type="radio"
                  defaultValue="Food and Beverage"
                  class="peer hidden"
                  name="franchiseLocation"
                />
                <span className="candidate-funding-btn w-full">
                  Food and Beverage
                </span>
              </label>
            </div>
            <div class="flex md:space-x-2 rounded-xl select-none max-md:flex-col md:flex-row">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setFranchiseLocation(e.target.value)}
                  type="radio"
                  name="franchiseLocation"
                  defaultValue="Non Food Storefront"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  Non Food Storefront
                </span>
              </label>

              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setFranchiseLocation(e.target.value)}
                  type="radio"
                  name="franchiseLocation"
                  defaultValue="Mobile Services"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  Mobile Services
                </span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <p className="font-bold text-black max-md:text-sm md:text-xl mb-2 ">
              How much cash do you have available for a downpayment and working
              capital (include retirement accounts)?
            </p>

            <div>
              <label
                htmlFor="steps-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DownPayment & Working Capital
              </label>
              <input
                onChange={handleDebtPaymentsChange}
                id="steps-range"
                type="range"
                name="downPayment"
                min={0}
                max={200000}
                defaultValue={0}
                step={500}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Amount: {downPayment}
              </p>
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                What is your most recent credit score?
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div class="flex md:space-x-2 rounded-xl select-none max-md:flex-col md:flex-row">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setCreditScore(e.target.value)}
                  type="radio"
                  name="creditScore"
                  defaultValue="below 680"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">below 680</span>
              </label>

              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setCreditScore(e.target.value)}
                  type="radio"
                  name="creditScore"
                  defaultValue="680 - 715"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">680 - 715</span>
              </label>
            </div>
            <div class="flex md:space-x-2 rounded-xl select-none max-md:flex-col md:flex-row">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setCreditScore(e.target.value)}
                  type="radio"
                  name="creditScore"
                  defaultValue="716 - 750"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">716 - 750</span>
              </label>

              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setCreditScore(e.target.value)}
                  type="radio"
                  name="creditScore"
                  defaultValue="Above 750"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">Above 750</span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                Do you have a working spouse or partner who can cover living
                expenses while the business is launching?
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div class="flex md:space-x-2 rounded-xl select-none">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setLaunching(e.target.value)}
                  type="radio"
                  name="launching"
                  defaultValue="Yes"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">Yes</span>
              </label>

              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setLaunching(e.target.value)}
                  type="radio"
                  name="launching"
                  defaultValue="No"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">No</span>
              </label>
            </div>
            <div class="flex md:space-x-2 rounded-xl select-none">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setLaunching(e.target.value)}
                  type="radio"
                  name="launching"
                  defaultValue="I have other means to cover living expenses during the launch"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  I have other means to cover living expenses during the launch
                </span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
              What is your annual household income?
            </p>

            <div>
              <label
                htmlFor="household"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Annual HouseHold Income
              </label>
              <input
                onChange={handleHouseHoldChange}
                id="household"
                type="range"
                name="houseHold"
                min={0}
                max={500000}
                defaultValue={0}
                step={500}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Amount: {houseHold}
              </p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
              What are your monthly personal debt payments?
            </p>

            <div>
              <label
                htmlFor="personal"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Monthly Personal Debt Payments
              </label>
              <input
                onChange={handleMonthlyPersonal}
                id="personal"
                type="range"
                name="debtPayments"
                min={0}
                max={50000}
                defaultValue={0}
                step={500}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Amount: {debtPayments}
              </p>
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                Do you have a minimum 5-year credit history?
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div class="flex md:space-x-2 rounded-xl select-none">
              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setCreditHistory(e.target.value)}
                  type="radio"
                  name="creditHistory"
                  defaultValue="Yes"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">Yes</span>
              </label>

              <label class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setCreditHistory(e.target.value)}
                  type="radio"
                  name="creditHistory"
                  defaultValue="No"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">No</span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                Bankruptcies within the last 7 years
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div className="flex md:space-x-2 rounded-xl select-none max-md:flex-col md:flex-row">
              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setBankruptcies(e.target.value)}
                  type="radio"
                  name="bankruptcies"
                  defaultValue="Never"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">Never</span>
              </label>

              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setBankruptcies(e.target.value)}
                  type="radio"
                  name="bankruptcies"
                  defaultValue="0-7 years ago"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  0-7 years ago
                </span>
              </label>
            </div>
            <div class="flex md:space-x-2 rounded-xl select-none max-md:flex-col md:flex-row">
              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setBankruptcies(e.target.value)}
                  type="radio"
                  name="bankruptcies"
                  defaultValue="8-10 years ago"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  8-10 years ago
                </span>
              </label>

              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setBankruptcies(e.target.value)}
                  type="radio"
                  name="bankruptcies"
                  defaultValue="More than 10 years ago"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  More than 10 years ago
                </span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                On your credit cards, what percentage of the credit limit are
                you using (your statement balances divided by your credit
                limits)?
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div className="flex md:space-x-2 rounded-xl select-none">
              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setPercentage(e.target.value)}
                  type="radio"
                  name="percentage"
                  defaultValue="0-35%"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">0-35%</span>
              </label>

              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setPercentage(e.target.value)}
                  type="radio"
                  name="percentage"
                  defaultValue="36-50%"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">36-50%</span>
              </label>
            </div>
            <div className="flex md:space-x-2 rounded-xl select-none">
              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setPercentage(e.target.value)}
                  type="radio"
                  name="percentage"
                  defaultValue="51% or higher"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">
                  51% or higher
                </span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
                Do you own real estate?
              </p>
              <p className="text-red-700 italic">(Required)</p>
            </div>

            <div className="flex md:space-x-2 rounded-xl select-none">
              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setRealState(e.target.value)}
                  type="radio"
                  name="realState"
                  defaultValue="Yes"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">Yes</span>
              </label>

              <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer w-full">
                <input
                  onChange={(e) => setRealState(e.target.value)}
                  type="radio"
                  name="realState"
                  defaultValue="No"
                  class="peer hidden"
                />
                <span className="candidate-funding-btn w-full">No</span>
              </label>
            </div>
          </div>

          <div className="my-3">
            <p className="font-bold text-black max-md:text-sm md:text-xl mb-2">
              What is your total net worth?
            </p>

            <div>
              <label
                htmlFor="totalnet"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Net Worth
              </label>
              <input
                onChange={handleTotalNet}
                id="totalnet"
                type="range"
                name="totalNet"
                min={0}
                max={5000000}
                defaultValue={0}
                step={500}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Amount: {totalNet}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="border-2 border-custom-heading-color bg-custom-heading-color  text-white px-5 rounded hover:bg-white hover:text-custom-heading-color transition-all duration-500 py-2  font-semibold">
              Calculate My Results
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};

export default FundingCalculator;
