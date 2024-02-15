import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ isAuthenticated }) => {
    const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div>
        <a href="/">Home</a>
        <a href="/files">My Files</a>

      </div>
      <div className="auth-buttons">
        {!isAuthenticated ? (
          <>
            <button onClick={() => {navigate('/signup')}}>Signup</button>
            <button onClick={() => {navigate('/login')}}>Login</button>
          </>
        ) : (
          <button onClick={() => {/* logic to logout */}}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

