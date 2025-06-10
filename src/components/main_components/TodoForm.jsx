import React, { useState } from 'react';
import axios from 'axios'; 
import "./styles/TodoForm.css";

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({
    taskName: '',
    dueDate: '',
    priority: 'Low',
    status: 'To do'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', form);

      if (typeof onAdd === 'function') {
        onAdd(response.data); 
      }

      setForm({ taskName: '', dueDate: '', priority: 'Low', status: 'To do' });
    } catch (error) {
      console.error("Error adding task:", error.response?.data || error.message);
    }
  };

  return (<>
  <div className="form-header">
    <h2>Add Task</h2>
  </div>

  <form className="task-form" onSubmit={handleSubmit}>
    <div className="task-row">
      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        value={form.taskName}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        required
      />
    </div>

    <div className="option-row">
      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        required
      >
        <option value="High">High</option>
        <option value="Moderate">Moderate</option>
        <option value="Low">Low</option>
      </select>

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        required
      >
        <option value="To do">To do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
    <div className="submit-row">
      <button type="submit">Add Task</button>
    </div>
  </form>
</>
  )
}
