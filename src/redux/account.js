import { createSlice } from "@reduxjs/toolkit";
import { defaultAccount } from "../mockData";
//Create a new slide of state and name it account
export const accountSlice = createSlice({
  name: "account",
  //set our selectedAccount state to the default account in the mock data
  initialState: {
    selectedAccount: defaultAccount.data.default_accounts[0].account_key,
  },
  reducers: {
    changeAccount: (state, action) => {
      state.selectedAccount = action.payload;
    },
  },
});

export const { changeAccount } = accountSlice.actions;

export default accountSlice.reducer;
