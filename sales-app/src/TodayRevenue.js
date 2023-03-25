//create a code for TodayRevenue.js and add it to the today-revenue page (TodayRevenue.js) and add the TodayRevenue form to the navbar (Navbar.js) in which total revenue for today is displayed
import React from 'react';
import './TodayRevenue.css';

const TodayRevenue = () => {
    return (
        <div className="container">
          <h1 className="text-center fw-bolder mb-3">Today's Revenue Is:</h1>
          <h3 className="fw-bolder">₹ 17500</h3>
        </div>
      );
    };

    export default TodayRevenue;