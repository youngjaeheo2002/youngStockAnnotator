// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/signup">
          {/* Signup component or page */}
        </Route>
        <Route path="/login">
          {/* Login component or page */}
        </Route>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
