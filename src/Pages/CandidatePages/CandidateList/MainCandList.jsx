import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MyCandContext } from "src/Context/CandidatesDataContext";

const MainCandList = () => {
  const { cands, loading } = useContext(MyCandContext);
  console.log(cands);

  return <div></div>;
};

export default MainCandList;
