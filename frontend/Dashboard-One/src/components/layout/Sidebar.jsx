import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav >
      <h3>My App</h3>
      <ul>
        <li>
          <Link to="/dashboard" >
            Dashboard Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users" >
            Users
          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings" >
            Settings
          </Link>
        </li>
        <li>
          <Link to="/dashboard/reports" >
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
