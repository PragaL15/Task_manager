import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/navBar/sideNav';
//import Login from './pages/Login';
import Dashboard from './Pages/Dashboard';
import TaskEntryPage from './Pages/TaskPage';
import './App.css';

function ReactRoutes() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/TaskForm" element={<TaskEntryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default ReactRoutes;
