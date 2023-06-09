import React from "react";
import { render, screen } from "@testing-library/react";
import { Accounts } from "./Accounts";
import { Provider } from "react-redux";
import store from "../redux/store";

test("renders account selection correctly", () => {
  render(
    <Provider store={store}>
      <Accounts />
    </Provider>
  );

  const accountSelect = screen.getByLabelText("Account");

  expect(accountSelect).toBeInTheDocument();
});
