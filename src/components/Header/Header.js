import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-400">
      <nav className="flex justify-evenly items-center p-4 ">
        <div>
          <h2>Quiz App</h2>
        </div>
        <div className="md:flex space-x-6">
          <Link to="/">Home</Link>

          <Link to="/blog">Blog</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/topics">Topics</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
