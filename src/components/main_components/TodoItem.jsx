import React, { useState } from 'react';
import "./styles/TodoItem.css";

export default function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedTask); 
    setIsEditing(false);
  };

  return (
    <div className={`task-item priority-${task.priority}`}>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            name="taskName"
            value={editedTask.taskName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate.split('T')[0]} // format date
            onChange={handleChange}
            required
          />
          <select name="priority" value={editedTask.priority} onChange={handleChange}>
            <option>High</option>
            <option>Moderate</option>
            <option>Low</option>
          </select>
          <select name="status" value={editedTask.status} onChange={handleChange}>
            <option>To do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h4>{task.taskName}</h4>
          <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </>
      )}
    </div>
  );
}
