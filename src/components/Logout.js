// src/components/Logout.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Logout() {
    let history = useHistory();

    const handleLogout = () => {
        // Here you would normally handle the logout logic
        console.log('User logged out');
        history.push('/'); // Redirect to home page after logout
    };

    return (
        <div>
            <h1>Logout</h1>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Confirm Logout</button>
            <Link to="/">Cancel</Link>
        </div>
    );
}

export default Logout;
