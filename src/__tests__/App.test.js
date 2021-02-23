import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders rewards service text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Rewards Service/i);
  expect(linkElement).toBeInTheDocument();
});
