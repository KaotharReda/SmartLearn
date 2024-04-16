// src/components/UserAccount.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserAccount() {
    return (
        <div>
            <h1>User Account</h1>
            <p>Manage your account settings and personal details here.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default UserAccount;
