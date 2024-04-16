import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import CourseCatalog from './components/CourseCatalog';
import UserAccount from './components/UserAccount';
import Forums from './components/Forums';
import Logout from './components/Logout';
import PersonalizedLearning from './components/PersonalizedLearning';

function App() {
  return (
      <Router>
        <nav>
          <Link to="/course-catalog">Course Catalog</Link> |
          <Link to="/user-account">User Account</Link> |
          <Link to="/forums">Forums</Link> |
          <Link to="/personalized-path">Personalized Learning</Link>  |
          <Link to="/logout">Logout</Link>
        </nav>
          <Routes>
              <Route path="/course-catalog" element={<CourseCatalog />} />
              <Route path="/user-account" element={<UserAccount />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/personalized-path" element={<PersonalizedLearning />} />
              <Route path="/" element={<CourseCatalog />} />
          </Routes>
      </Router>
  );
}

export default App;
