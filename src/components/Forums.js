// src/components/Forums.js
import React from 'react';
import { Link } from 'react-router-dom';

function Forums() {
    return (
        <div>
            <h1>Forums</h1>
            <p>Engage with the community and discuss your learning experiences.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default Forums;
