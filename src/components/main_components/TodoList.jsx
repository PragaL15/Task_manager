import React, { useEffect, useState } from 'react';
import TaskItem from './TodoItem';
import axios from 'axios';
import './styles/TodoList.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${updatedTask._id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTasksByPriority = (priorityLabel) => {
    const filteredTasks = tasks.filter(task => task.priority.toLowerCase() === priorityLabel.toLowerCase());
    return (
      <div className="priority-group">
        <h3>{priorityLabel} Priority</h3>
        {filteredTasks.length === 0 ? <p>No tasks.</p> : (
          <div className="priority-tasks">
            {filteredTasks.map(task => (
              <TaskItem
                key={task._id}
                task={task}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="task-list">
      <h2>My Task Manager</h2>
      <div className="tasks-container">
        {renderTasksByPriority("High")}
        {renderTasksByPriority("Moderate")}
        {renderTasksByPriority("Low")}
      </div>
    </div>
  );
}
