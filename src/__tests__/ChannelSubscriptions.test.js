import React from "react";
import ChannelSubscriptions from "../components/ChannelSubscriptions";
import { render } from "@testing-library/react";

describe("ChannelSubscriptions", () => {
  const validProps = [
    {
      sports: "Sports",
      kids: "Kids",
      music: "Music",
      news: "News",
      movies: "Movies",
    },
    {
      sports: "",
      kids: "Kids",
      music: "",
      news: "News",
      movies: "",
    },
  ];
  it("renders correctly", () => {
    const { asFragment } = render(
      <ChannelSubscriptions eligibility={validProps} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of IndividualAccounts instances", () => {
    const { getAllByTestId } = render(
      <ChannelSubscriptions eligibility={validProps} />
    );
    expect(getAllByTestId("individual-channels")).toHaveLength(2);
  });
});
