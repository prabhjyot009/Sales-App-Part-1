import React from 'react';
import './TopSales.css';

const TopSales = () => {
  return (
    <div className="container">
      <h2 className="text-center">TOP 5 SALES</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Sales id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>51212</td>
            <td>Laptop</td>
            <td>2</td>
            <td>90000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>51222</td>
            <td>Computer</td>
            <td>4</td>
            <td>50000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopSales;