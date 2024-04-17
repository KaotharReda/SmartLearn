import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseCatalog from './components/CourseCatalog';
import UserAccount from './components/UserAccount';
import Forums from './components/Forums';
import Logout from './components/Logout';
import PersonalizedLearning from './components/PersonalizedLearning';
import './styles/global.css';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/course-catalog" element={<CourseCatalog/>} />
                    <Route path="/user-account" element={<UserAccount/>} />
                    <Route path="/forums" element={<Forums/>} />
                    <Route path="/personalized-path" element={<PersonalizedLearning/>} />
                    <Route path="/" element={<CourseCatalog/>} />
                    <Route path="/logout" element={<Logout/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
