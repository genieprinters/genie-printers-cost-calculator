import React, { useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="app-container">
      <h1>Genie Printers</h1>
      <h2>Cost Calculation</h2>

      <div className="top-section">
        <label>
          Product:
          <select value={product} onChange={(e) => setProduct(e.target.value)}>
            <option value="">Select</option>
            <option value="Hang Tag">Hang Tag</option>
            <option value="Booklet">Booklet</option>
          </select>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Total quantity"
          />
        </label>

        <label>
          Upload Product Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {image && <img src={image} alt="Product Preview" className="preview" />}
      </div>

      <table className="cost-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Per Piece</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {[
            'Card / Paper', 'Plates', 'Printing', 'Lamination', 'UV',
            'Inner Card', 'Pasting', 'Die', 'Die Cutting',
            'Optional Cost 1', 'Optional Cost 2', 'Optional Cost 3'
          ].map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bottom-section">
        <p><strong>Total Cost:</strong> ₹ [Auto]</p>
        <p><strong>Per Piece Cost:</strong> ₹ [Auto]</p>
        <button>Save Report</button>
        <button>Export PDF</button>
        <button>Export Excel</button>
      </div>
    </div>
  );
}

export default App;
