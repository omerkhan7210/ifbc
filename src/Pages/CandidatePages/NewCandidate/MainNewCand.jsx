import PageTransition from "src/Animations/PageTransition";
import Form from "./Form";

const MainNewCand = () => {
  return (
    <PageTransition>
      <section className="flex flex-col w-full " id="main">
        <div
          id="top-text"
          className=" relative flex flex-col gap-2 justify-center items-center before:absolute before:content-[''] before:top-0 before:w-full before:h-full before:bg-custom-heading-color/60 min-h-[400px] before:z-10"
          style={{
            background: "url(/images/banners/candidate-banner.jpg)",
            backgroundAttachment: "fixed",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-7xl text-white font-bold text-center z-20">
            New Candidate
          </h1>
          <p className="text-center text-xl relative text-white z-50 italic">
            Fields with a{" "}
            <span className="border-b-2 border-custom-dark-blue">blue</span>{" "}
            underline are included in Territory Checks submissions
          </p>
        </div>

        <div
          id="rows-container"
          className="relative  grid grid-cols-12 place-items-center gap-5 px-5 md:px-0 "
        >
          <Form />
        </div>
      </section>
    </PageTransition>
  );
};

export default MainNewCand;
