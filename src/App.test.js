import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";

test("Render App Bar", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByText(/ScotiaBank/);
  expect(titleElement).toBeInTheDocument();
});

test("Render Account Component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const accountsComponent = screen.getByTestId("accounts-component");
  expect(accountsComponent).toBeInTheDocument();
});

test("Render Documents Component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const documentsComponent = screen.getByTestId("documents-component");
  expect(documentsComponent).toBeInTheDocument();
});
