import React, { useContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";
import BottomBar from "./BottomBar";
import { MyContext } from "src/Context/ListingDataContext";
import BarLoader from "src/Animations/BarLoader";
import PageTransition from "src/Animations/PageTransition";

const MainDetails = () => {
  const url = useParams();
  const pName = url.name;
  const { listings } = useContext(MyContext);
  const [listingContent, setListingContent] = useState();

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
        <TopBar listingContent={listingContent} />
        <BottomBar listingContent={listingContent} />
      </main>
    </PageTransition>
  );
};

export default MainDetails;
