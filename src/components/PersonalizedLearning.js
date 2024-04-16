// src/components/PersonalizedLearning.js
import React from 'react';
import { Link } from 'react-router-dom';

function PersonalizedLearning() {
    return (
        <div>
            <h1>Personalized Learning Path</h1>
            <p>Create and manage your personalized learning paths tailored to your interests and goals.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default PersonalizedLearning;
