import { render, screen, fireEvent } from "@testing-library/react";
import { ImageAvatars } from "./Profile";

test("Render", () => {
  render(<ImageAvatars name="DL" />);
  expect(screen.getByText("DL")).toBeInTheDocument();
});
