import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  value: JSON.parse(localStorage.getItem("cartListings"))?.length || 0,
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
    decrementByListing: (state, action) => {
      // Find the index of the listing to be removed
      const index = state.listings.findIndex(
        (listing) => listing === action.payload
      );

      // If the listing is found, proceed to remove it
      if (index !== -1) {
        state.value -= 1; // Decrement the value
        state.listings = state.listings.filter(
          (listing) => listing !== action.payload
        ); // Remove the listing

        // Update localStorage with the new listings array
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
export const {
  increment,
  decrement,
  incrementByListing,
  generateUuid,
  decrementByListing,
} = counterSlice.actions;

export default counterSlice.reducer;
