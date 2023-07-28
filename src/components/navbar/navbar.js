import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-box">
        {/* First Box */}
        <div className="logo">
          {/* Your logo image */}
        </div>
        <div className="title">
          {/* Your title */}
        </div>
      </div>
      <div className="navbar-box center-box">
        {/* Second Box */}
        <div className="search-bar">
          {/* Your search bar component */}
        </div>
      </div>
      <div className="navbar-box">
        {/* Third Box */}
        <div className="logos">
          {/* Your two logo images */}
        </div>
        <div className="title">
          {/* Title under the logos */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

