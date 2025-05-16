import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
