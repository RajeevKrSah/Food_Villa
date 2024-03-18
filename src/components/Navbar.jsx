import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-evenly items-center h-16 bg-cyan-200">
      <div className="flex gap-20 items-center">
        <h1 className="text-3xl">FoodVilla</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>

      <ul className="flex">
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
