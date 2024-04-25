import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item/Item";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Toggle } from "./components/Toggle/Toggle";

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

  const sortedItems = [...items].sort((a, b) => a.price - b.price);
  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const itemsToDisplay = showAllItems
    ? filteredItems
    : filteredItems.slice(0, 5);

  return (
    <div>
      <SearchBar placeholder="Filter items by name..." value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Toggle
        primaryText="show top 5"
        secondaryText="show all"
        value={showAllItems}
        onClick={() => setShowAllItems(!showAllItems)}
      />
      {itemsToDisplay.map((item, i) => (
        <Item {...item} key={i + item.name} />
      ))}
    </div>
  );
}

export default App;
