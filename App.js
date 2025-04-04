import React, { useState } from "react";

function App() {
  const [productType, setProductType] = useState("Hang Tag");
  const [quantity, setQuantity] = useState(0);
  const [costs, setCosts] = useState({
    cardPaper: 0,
    plates: 0,
    printing: 0,
    lamination: 0,
    uv: 0,
    innerCard: 0,
    pasting: 0,
    die: 0,
    dieCutting: 0,
  });

  const handleProductChange = (event) => {
    setProductType(event.target.value);
    setCosts({
      cardPaper: 0,
      plates: 0,
      printing: 0,
      lamination: 0,
      uv: 0,
      innerCard: 0,
      pasting: 0,
      die: 0,
      dieCutting: 0,
    });
  };

  const calculateTotalCost = () => {
    let totalCost = Object.values(costs).reduce((acc, val) => acc + parseFloat(val), 0);
    return totalCost;
  };

  const perPieceCost = calculateTotalCost() / quantity;

  return (
    <div className="App">
      <h1>Genie Printers Cost Calculator</h1>
      <select onChange={handleProductChange}>
        <option value="Hang Tag">Hang Tag</option>
        <option value="Booklet">Booklet</option>
      </select>
      <br />
      {/* Add your form inputs and logic here */}
    </div>
  );
}

export default App;
