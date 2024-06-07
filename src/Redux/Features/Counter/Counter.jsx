import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="sticky top-10 z-[99999] bg-custom-heading-color w-64 flex items-center justify-center p-2">
      {" "}
      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button> */}
      <h1 className="text-lg text-white">
        Requested Listings:{" "}
        <span className="text-white font-extrabold">{count}</span>
      </h1>
      {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}
    </div>
  );
}
