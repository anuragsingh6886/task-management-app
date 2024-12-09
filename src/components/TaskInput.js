import React, { useState, useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';
import { debounce } from '../utils/debounce';

export const TaskInput = () => {
  const [newTask, setNewTask] = useState('');
  const { dispatch } = useContext(TaskContext);

  // Debounced task addition
  const debouncedAddTask = useCallback(
    debounce((taskText) => {
      if (taskText.trim()) {
        dispatch({
          type: 'ADD_TASK',
          payload: {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date().toLocaleString()
          }
        });
        setNewTask('');
      }
    }, 300),
    [dispatch]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    debouncedAddTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input type="text" className="form-control" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a new task" />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};