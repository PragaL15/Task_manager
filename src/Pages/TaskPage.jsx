import React from "react";
import Sidebar from "../components/navBar/sideNav";
import TaskForm from "../components/main_components/TodoForm";
import "./TaskPage.css"
const TaskEntryPage = () => {
    return (
        <div className="container">
            <Sidebar />
            <TaskForm />
        </div>
    );
}
export default TaskEntryPage;