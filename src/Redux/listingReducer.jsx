import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  value: JSON.parse(localStorage.getItem("cartListings"))?.length || 0,
  listings: JSON.parse(localStorage.getItem("cartListings")) || [],
  uuid: localStorage.getItem("uuid") || null,
  ifLogin: JSON.parse(localStorage.getItem("ifLogin")) || false,
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
  role:
    JSON.parse(localStorage.getItem("userDetails")) &&
    typeof JSON.parse(localStorage.getItem("userDetails")) === "object"
      ? JSON.parse(localStorage.getItem("userDetails"))?.UserType
      : null,
};

export const listingReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
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
    setIfLogin: (state, action) => {
      localStorage.setItem("ifLogin", action.payload);

      state.ifLogin = action.payload;
    },
    setUserDetails: (state, action) => {
      if (action.payload) {
        state.userDetails = action.payload;
        localStorage.setItem("userDetails", JSON.stringify(action.payload));
      } else {
        state.userDetails = null;
        localStorage.removeItem("userDetails");
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
  setIfLogin,
  setUserDetails,
} = listingReducer.actions;

export default listingReducer.reducer;
