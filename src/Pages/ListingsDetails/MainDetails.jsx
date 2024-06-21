import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";
import BottomBar from "./BottomBar";
import { MyContext } from "src/Context/ListingDataContext";
import BarLoader from "src/Animations/BarLoader";
import PageTransition from "src/Animations/PageTransition";
import RelatedListings from "src/Globals/RelatedListings";

const MainDetails = ({ setShow, show, setRegistrationType }) => {
  const url = useParams();
  const pName = url.name;
  const { listings, loading } = useContext(MyContext);
  const [listingContent, setListingContent] = useState();

  useLayoutEffect(() => {
    if (loading) {
      document.querySelector("html").style.overflowY = "hidden";
      document.querySelector("html").style.height = "100%";
    }
    if (!loading) {
      document.querySelector("html").style.overflow = "auto";
      document.querySelector("html").style.height = "auto";
    }
  }, [loading]);

  useEffect(() => {
    listings.map((listing) => {
      const url = listing.name.toLowerCase().split(" ").join("-");
      if (url === pName) {
        setListingContent(listing);
      }
    });
  }, [listings]);

  return (
    <PageTransition>
      <main
        id="main"
        role="main"
        tabIndex={-1}
        className="max-w-7xl px-6 mx-auto gap-x-10 "
      >
        <TopBar
          listingContent={listingContent}
          setShow={setShow}
          show={show}
          setRegistrationType={setRegistrationType}
        />
        <BottomBar listingContent={listingContent} />
      </main>
      <RelatedListings />
    </PageTransition>
  );
};

export default MainDetails;
