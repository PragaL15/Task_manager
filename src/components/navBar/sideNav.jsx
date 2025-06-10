import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaPlusSquare, FaHome } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2><FaTasks className="sidebar-icon" /> MyTaskApp</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome className="sidebar-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/TaskForm">
              <FaPlusSquare className="sidebar-icon" /> Add Task
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
