import React from "react";
import { render } from "@testing-library/react";
import AccountNumber from "../components/AccountNumberForm";

describe("AccountNumberForm", () => {
  //   const validProps = {
  //     accountNumber: 1234,
  //   };

  it("renders correctly", () => {
    const { asFragment } = render(<AccountNumber />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("check button exists with correct text", () => {
    const { getByRole } = render(<AccountNumber />);
    const button = getByRole("button", { name: /Submit/i });
    expect(button).toBeInTheDocument();
  });
});
