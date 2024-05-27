import { motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import BarLoader from "./BarLoader";

const PageTransition = ({ children }) => {
  const { loading } = useContext(MyContext);

  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: [0, 1, 1, 0],
    },
  };
  return (
    <>
      {children}
      <motion.div
        className="origin-bottom h-screen w-full fixed top-0 left-0 z-[99999] flex flex-col gap-3 justify-center items-center bg-custom-heading-color"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.img
          animate={{
            opacity: [0, 1, 1, 0],
            transition: { duration: 1, delay: 0.1 },
          }}
          src="/images/logo/IFBC 3.png"
          alt="KPEG"
          className="w-96"
        />
        {loading && <BarLoader bgcolor="white" />}
      </motion.div>
    </>
  );
};

export default PageTransition;
