import React from 'react';
import { Link } from 'react-router-dom';

function CourseCatalog() {
    return (
        <div>
            <h1>Course Catalog</h1>
            <p>Select a course you are interested in.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default CourseCatalog;
