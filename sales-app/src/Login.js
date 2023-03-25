//create login form and add it to the login page (Login.js) and add the login form to the navbar (Navbar.js)
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
        <h2 className="text-center">LOGIN</h2>
        <form>
            <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
    }

    export default Login;