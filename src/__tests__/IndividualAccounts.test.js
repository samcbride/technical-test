import React from "react";
import IndividualAccounts from "../components/IndividualAccounts";
import { render } from "@testing-library/react";

describe("IndividualAccounts", () => {
  const validProps = {
    accountNumber: 1234,
    sports: "Sports",
    kids: "Kids",
    music: "Music",
    news: "News",
    movies: "Movies",
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <IndividualAccounts
        accountNumber={validProps.accountNumber}
        sports={validProps.sports}
        kids={validProps.kids}
        music={validProps.music}
        news={validProps.news}
        movies={validProps.movies}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct values for props", () => {
    const { getByText } = render(
      <IndividualAccounts
        accountNumber={validProps.accountNumber}
        sports={validProps.sports}
        kids={validProps.kids}
        music={validProps.music}
        news={validProps.news}
        movies={validProps.movies}
      />
    );
    expect(getByText("1234")).toHaveClass("individual-channels__accountNumber");
    expect(getByText("Sports")).toHaveClass("individual-channels__sports");
    expect(getByText("Kids")).toHaveClass("individual-channels__kids");
    expect(getByText("Music")).toHaveClass("individual-channels__music");
    expect(getByText("News")).toHaveClass("individual-channels__news");
    expect(getByText("Movies")).toHaveClass("individual-channels__movies");
  });
});
