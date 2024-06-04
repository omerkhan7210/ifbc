import React, { useContext, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import ListingsColumns from "src/Pages/ListingsPage/ListingsColumns";
import DialogBox from "../DialogBox";
import Form from "src/Pages/CandidatePages/NewCandidate/Form";

const FormalReg = () => {
  const { activeListings, formalRegCheck, setformalRegCheck, listings } =
    useContext(MyContext);
  const [active, setActive] = useState("candidate");

  return (
    <DialogBox>
      <Form />
    </DialogBox>
  );
};

export default FormalReg;
