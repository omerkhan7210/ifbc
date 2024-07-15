import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import TopBar from "./TopBar";
import { useParams } from "react-router-dom";
import BottomBar from "./BottomBar";
import { MyContext } from "src/Context/ListingDataContext";
import BarLoader from "src/Animations/BarLoader";
import PageTransition from "src/Animations/PageTransition";
import RelatedListings from "src/Globals/RelatedListings";
import { useQuery } from "react-query";
import axios from "axios";

const MainDetails = ({ setShow, show, setRegistrationType }) => {
  const url = useParams();
  const pName = url.name;

  const urlApi = `https://backend.ifbc.co/api/listingsOwner`;

  const {
    data: listingContent,
    isLoading,
    error,
    isFetching,
  } = useQuery(
    "FRANCHISEOWNER",
    () => {
      return axios.get(urlApi);
    },
    {
      staleTime: 86400 * 30,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      select: (data) => {
        return data?.data.filter((owner) => owner.name === pName);
      },
    }
  );

  return (
    <PageTransition>
      <main
        id="main"
        role="main"
        tabIndex={-1}
        className="max-w-7xl px-6 mx-auto gap-x-10 "
      >
        {!isLoading && listingContent && (
          <>
            <TopBar
              listingContent={listingContent}
              setShow={setShow}
              show={show}
              setRegistrationType={setRegistrationType}
            />
            <BottomBar listingContent={listingContent} />
          </>
        )}
      </main>
    </PageTransition>
  );
};

export default MainDetails;
