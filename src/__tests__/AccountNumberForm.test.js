import React from "react";
import { render } from "@testing-library/react";
import AccountNumber from "../components/AccountNumberForm";

describe("AccountNumberForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AccountNumber />);

    expect(asFragment()).toMatchSnapshot();
  });
});
