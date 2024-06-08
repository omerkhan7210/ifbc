import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  value: JSON.parse(localStorage.getItem("cartListings")).length || 0,
  listings: JSON.parse(localStorage.getItem("cartListings")) || [],
  uuid: localStorage.getItem("uuid") || null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByListing: (state, action) => {
      if (!state.listings.find((listing) => listing === action.payload)) {
        state.value += 1;
        state.listings.push(action.payload);
        localStorage.setItem("cartListings", JSON.stringify(state.listings));
      }
    },
    generateUuid: (state) => {
      if (!state.uuid) {
        const newUuid = uuidv4();
        localStorage.setItem("uuid", newUuid);
        state.uuid = newUuid;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByListing, generateUuid } =
  counterSlice.actions;

export default counterSlice.reducer;
