import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item/Item";

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

function App() {
  const [showAllItems, setShowAllItems] = useState(false);
  const [filter, setFilter] = useState<string>("");

  const sortedItems = items.sort((a, b) => a.price - b.price);
  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const itemsToDisplay = showAllItems
    ? filteredItems
    : filteredItems.slice(0, 5);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button
        onClick={() => {
          setShowAllItems(!showAllItems);
        }}
      >
        {showAllItems ? "show cheapest" : "show all"}
      </button>
      {itemsToDisplay.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </div>
  );
}

export default App;
