import { render } from "@testing-library/react";
import { Item } from "./Item";

describe("Item", () => {
  it("should render name and price", () => {
    const { getByText } = render(<Item name="item name" price={999} />);

    expect(getByText("item name")).toBeVisible();
    expect(getByText(999)).toBeVisible();
  });
});
