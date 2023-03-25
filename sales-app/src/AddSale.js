import React from 'react';
import './AddSale.css';

const AddSale = () => {
  return (
    <div className="container">
      <h2 className="text-center">ADD SALE ENTRY</h2>
      <form>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" className="form-control" id="amount" placeholder="Enter amount" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddSale;