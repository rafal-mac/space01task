import { render, fireEvent } from "@testing-library/react";
import App from "./App";

const items = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 },
];

describe("App", () => {
  test('renders all items when "show all" is clicked', () => {
    const { getByText, getAllByRole } = render(<App />);

    expect(getAllByRole("listitem").length).toBe(5);

    fireEvent.click(getByText("show all"));

    expect(getAllByRole("listitem").length).toBe(items.length);
  });

  test("filters items correctly", () => {
    const { getByPlaceholderText, getAllByRole } = render(<App />);

    fireEvent.change(getByPlaceholderText("Filter items by name..."), {
      target: { value: "A" },
    });

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes("a")
    );
    expect(getAllByRole("listitem").length).toBe(filteredItems.length);
  });

  test("sorts items by price in ascending order", () => {
    const { getAllByRole } = render(<App />);

    const displayedItemNames = getAllByRole("listitem").map(
      (item) => item.textContent
    );

    const sortedItemNames = [...items]
      .sort((a, b) => a.price - b.price)
      .slice(0, 5)
      .map(
        (item) =>
          item.name +
          new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(item.price)
      );

    expect(displayedItemNames).toEqual(sortedItemNames);
  });
});
