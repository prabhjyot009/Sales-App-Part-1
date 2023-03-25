//create a register form and add it to the register page (Register.js) and add the register form to the navbar (Navbar.js)

import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className="container">
        <h2 className="text-center">REGISTRATION FORM</h2>
        <form>
            <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input type="text" className="form-control" id="name" placeholder="First Name" />
            <label htmlFor="surname">Last Name</label>
            <input type="text" className="form-control" id="surname" placeholder="Last Name" />
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        </div>
    );
    }

    export default Register;
