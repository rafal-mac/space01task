import "./App.css";

function App() {
  const data = [
    { name: "Item A", price: 125 },
    { name: "Item B", price: 230 },
    { name: "Item C", price: 295 },
    { name: "Item D", price: 245 },
    { name: "Item E", price: 900 },
    { name: "Item F", price: 875 },
    { name: "Item G", price: 235 },
    { name: "Item H", price: 400 },
  ];

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
