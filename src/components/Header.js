import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FaHome, FaBook, FaUser, FaComments, FaSignOutAlt, FaLeanpub, FaUniversity} from 'react-icons/fa';


function Header() {
    return (
        <header className="main-header">
            <h1><Link to="/" className="logo"><FaLeanpub/> SmartLearn</Link></h1>
            <nav>
                <Link to="/course-catalog"><FaBook /> Courses</Link>
                <Link to="/forums"><FaComments /> Forums</Link>
                <Link to="/personalized-path"> <FaUniversity/> Personalize</Link>
                <Link to="/user-account"><FaUser /> Account</Link>
                <Link to="/logout"><FaSignOutAlt /> Logout</Link>
            </nav>
        </header>
    );
}

export default Header;
