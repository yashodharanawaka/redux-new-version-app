import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  dramas: [],
};

const dramasSlice = createSlice({
  name: "dramas",
  initialState,
  reducers: {
    getDramas: (state) => {
      state.loading = true;
    },
    getDramasSuccess: (state, { payload }) => {
      state.dramas = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getDramasFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const {
  getDramas,
  getDramasSuccess,
  getDramasFailure,
} = dramasSlice.actions;

// A selector
export const dramasSelector = (state) => state.dramas;

// The reducer
export default dramasSlice.reducer;

// Asynchronous thunk action
export function fetchDramas() {
  return async (dispatch) => {
    dispatch(getDramas());

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/yashodharanawaka/api-for-testing/dramas"
      );
      const data = await response.json();

      dispatch(getDramasSuccess(data));
    } catch (error) {
      dispatch(getDramasFailure());
    }
  };
}
