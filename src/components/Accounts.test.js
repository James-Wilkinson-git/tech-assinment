import { render, screen, fireEvent } from "@testing-library/react";
import { Accounts } from "./Accounts";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("Accounts", () => {
  const accounts = [
    { key: "1", description: "Account 1", id: "001", typeDesc: "Type A" },
    { key: "2", description: "Account 2", id: "002", typeDesc: "Type B" },
    { key: "3", description: "Account 3", id: "003", typeDesc: "Type C" },
  ];

  let store;

  beforeEach(() => {
    store = mockStore({
      account: {
        selectedAccount: "2", // Mock initial selected account
      },
    });
  });

  test("renders the select component with account options", () => {
    render(
      <Provider store={store}>
        <Accounts />
      </Provider>
    );

    const accountSelect = screen.getByLabelText("Account");

    // Verify that the select component and its label are rendered
    expect(accountSelect).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();

    // Verify that the account options are rendered
    accounts.forEach((account) => {
      expect(
        screen.getByText(
          `${account.description} ${account.id} ${account.typeDesc}`
        )
      ).toBeInTheDocument();
    });
  });

  test("dispatches the changeAccount action when an account is selected", () => {
    render(
      <Provider store={store}>
        <Accounts />
      </Provider>
    );

    const accountSelect = screen.getByLabelText("Account");

    // Select an account from the dropdown
    fireEvent.change(accountSelect, { target: { value: "3" } });

    // Verify that the changeAccount action was dispatched with the selected account value
    expect(store.getActions()).toEqual([
      { type: "CHANGE_ACCOUNT", payload: "3" },
    ]);
  });
});
