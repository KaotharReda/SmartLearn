import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import CourseCatalog from './components/CourseCatalog';
import UserAccount from './components/UserAccount';
import Forums from './components/Forums';
import Logout from './components/Logout';
import PersonalizedPath from './components/PersonalizedPath';

function App() {
  return (
      <Router>
        <nav>
          <Link to="/course-catalog">Course Catalog</Link> |
          <Link to="/user-account">User Account</Link> |
          <Link to="/forums">Forums</Link> |
          <Link to="/logout">Logout</Link> |
          <Link to="/personalized-path">Personalized Path</Link>
        </nav>
        <Routes>
          <Route path="/course-catalog" component={CourseCatalog} />
          <Route path="/user-account" component={UserAccount} />
          <Route path="/forums" component={Forums} />
          <Route path="/logout" component={Logout} />
          <Route path="/personalized-path" component={PersonalizedPath} />
          <Route path="/" exact component={CourseCatalog} />
        </Routes>
      </Router>
  );
}

export default App;
