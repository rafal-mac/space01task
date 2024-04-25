import { render } from "@testing-library/react";
import { Item } from "./Item";

describe("Item", () => {
  it("should render name and price", () => {
    const { getByText } = render(<Item name="item name" price={999} />);

    expect(getByText("item name")).toBeVisible();
    expect(
      getByText(
        new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(999)
      )
    ).toBeVisible();
  });
});
