import React, { useContext, useState } from "react";
import { MyContext } from "src/Context/ListingDataContext";
import ListingsColumns from "src/Pages/ListingsPage/ListingsColumns";
import DialogBox from "../DialogBox";
import Form from "src/Pages/CandidatePages/NewCandidate/Form";
import { MyCandContext } from "src/Context/CandidatesDataContext";

const FormalReg = ({ setShow, show }) => {
  const { cands } = useContext(MyCandContext);
  return (
    <DialogBox setShow={setShow} show={show}>
      <Form />
    </DialogBox>
  );
};

export default FormalReg;
