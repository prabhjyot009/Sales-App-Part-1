//create a logout form and add it to the logout page (Logout.js) and add the logout form to the navbar (Navbar.js) and when i click on the logout button it will redirect me to the login page (Login.js)
import React from 'react';
import { Link } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
    return (
        <div className="logout">
        <h1>Logout</h1>
        <form>
            <Link to="/login">
            <button className="btn btn-primary" type="submit">Logout</button>
            </Link>
        </form>
        </div>
    );
    }

export default Logout;

//code for login css file (Login.css)
