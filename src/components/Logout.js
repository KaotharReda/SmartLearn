import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/global.css"

function Logout() {
    let navigate = useNavigate();

    const handleLogout = () => {
        console.log('User logged out');
        navigate('/');
    };

    return (
        <div className="logout-container">
            <h1>Logout</h1>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Confirm Logout</button>
            <Link to="/" className="cancel-link">Cancel</Link>
        </div>
    );
}

export default Logout;
