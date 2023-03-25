import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import AddSale from './AddSale';
import TopSales from './TopSales';
import TodayRevenue from './TodayRevenue';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add-sale" element={<AddSale />} />
        <Route path="/top-sales" element={<TopSales />} />
        <Route path="/today-revenue" element={<TodayRevenue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;