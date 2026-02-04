import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();
  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="name-input"
      value="Frank"
      onChange={handleChange}
      required
    />,
  );

  const input = screen.getByLabelText(/name/i);

  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute("placeholder", "Enter your name");
  expect(input).toHaveAttribute("name", "name-input");
  expect(input).toHaveAttribute("value", "Frank");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("id", "name-input");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(<Input labelText="Name" name="name.input" onChange={handleChange} />);

  const input = screen.getByLabelText(/name/i);
  expect(input).toBeInTheDocument();

  expect(handleChange).toHaveBeenCalledTimes(0);
  await user.type(input, "Frank");
  expect(handleChange).toHaveBeenCalledTimes(5);
});
