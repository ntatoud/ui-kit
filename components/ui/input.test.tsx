import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders correctly", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("handles disabled state", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:cursor-not-allowed");
  });

  it("applies custom className", () => {
    const customClass = "my-custom-class";
    render(<Input className={customClass} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass(customClass);
  });

  it("forwards type attribute", () => {
    render(<Input type="password" />);
    const input = screen.getByDisplayValue("");
    expect(input).toHaveAttribute("type", "password");
  });

  it("has default styling classes", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass(
      "flex",
      "h-9",
      "w-full",
      "rounded-md",
      "border",
      "border-input"
    );
  });
});
