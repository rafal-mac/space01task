import { render, fireEvent } from "@testing-library/react";
import { Toggle } from "./Toggle";

describe("Toggle Component", () => {
  test("renders button with primaryText when value is true", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Toggle
        primaryText="On"
        secondaryText="Off"
        value={true}
        onClick={onClick}
      />
    );

    const button = getByText("On");
    expect(button).toBeVisible();
  });

  test("renders button with secondaryText when value is false", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Toggle
        primaryText="On"
        secondaryText="Off"
        value={false}
        onClick={onClick}
      />
    );

    const button = getByText("Off");
    expect(button).toBeVisible();
  });

  test("calls onClick when button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Toggle
        primaryText="On"
        secondaryText="Off"
        value={true}
        onClick={onClick}
      />
    );

    const button = getByText("On");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
