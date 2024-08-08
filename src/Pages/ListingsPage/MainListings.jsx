import ShoppingCartPopup from "src/Popups/ShoppingCartPopup";
import AllListings from "./AllListings";
import ListingsFilter from "./ListingsFilter";
import PageTransition from "src/Animations/PageTransition";
import RelatedListings from "src/Globals/RelatedListings";

const MainListings = ({ setShow, setRegistrationType }) => {
  return (
    <PageTransition>
      <main
        className="	   grid grid-cols-12 md:gap-6   md:px-10 max-md:px-5 py-5 relative"
        id="main"
      >
        <div
          id="left-sidebar"
          className="md:col-span-3  sm:col-span-6 col-span-12 mt-3  bg-white relative overflow-hidden"
        >
          <ShoppingCartPopup />
        </div>

        <div
          id="right-sidebar"
          className="md:col-span-9 sm:col-span-6 col-span-12 "
        >
          <AllListings
            setShow={setShow}
            setRegistrationType={setRegistrationType}
          />
        </div>
      </main>

      <RelatedListings />
    </PageTransition>
  );
};

export default MainListings;
