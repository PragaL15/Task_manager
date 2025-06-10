import React from "react";
import TodoList from "../components/main_components/TodoList";
import Sidebar from "../components/navBar/sideNav";
import "./dashboard.css";
export default function Dashboard() {

  return (
    <div className="container">
      <Sidebar/>
      <div className="list">
      <TodoList />
      </div>
    </div>
  );
}