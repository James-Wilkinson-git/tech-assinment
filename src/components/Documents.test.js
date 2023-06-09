import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Documents } from "../components/Documents";

test("Render Document Component", () => {
  render(
    <Provider store={store}>
      <Documents />
    </Provider>
  );
  const documentTypeColumn = screen.getByText("Document Type");
  const deliveryMethodColumn = screen.getByText("Delivery Method");
  expect(documentTypeColumn).toBeInTheDocument();
  expect(deliveryMethodColumn).toBeInTheDocument();
});
