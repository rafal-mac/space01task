import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

const placeholder = "filter...";

describe("SearchBar Component", () => {
  test("renders input element", () => {
    const setFilter = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder={placeholder} value="" onChange={setFilter} />
    );

    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test("allows user to enter text and calls the setFilter function", () => {
    const setFilter = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar
        placeholder={placeholder}
        value=""
        onChange={(e) => setFilter(e.target.value)}
      />
    );

    const inputElement = getByPlaceholderText(placeholder);
    fireEvent.change(inputElement, { target: { value: "new filter" } });

    expect(setFilter).toHaveBeenCalledWith("new filter");
  });
});
