import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { eligibility } from "../data/eligibility.json";

test("renders rewards service text", () => {
  render(<App eligibility={eligibility} />);
  const linkElement = screen.getByText(/Rewards Service/i);
  expect(linkElement).toBeInTheDocument();
});
