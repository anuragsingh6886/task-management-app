import React, { useState, useContext, memo } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskItem = memo(({ task, onEdit, editingTask }) => {
  const { dispatch } = useContext(TaskContext);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: {
        id: task.id,
        updates: { text: editText }
      }
    });
    onEdit(null);
  };

  return (
    <div className={`d-flex align-items-center mb-2 p-2 rounded ${task.completed ? 'bg-success bg-opacity-10' : 'bg-white'}`}>
      <div className="form-check me-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
        />
      </div>

      {editingTask === task.id ? (
        <div className="d-flex flex-grow-1 align-items-center">
          <input
            type="text"
            className="form-control me-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="btn btn-success me-2"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="d-flex flex-grow-1 align-items-center">
          <span className="flex-grow-1">{task.text}</span>
          <small className="text-muted me-2">{task.createdAt}</small>
          <button
            onClick={() => onEdit(task.id)}
            className="btn btn-sm btn-outline-primary me-2"
          >
            Edit
          </button>
        </div>
      )}

      <button
        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
        className="btn btn-sm btn-outline-danger"
      >
        Delete
      </button>
    </div>
  );
});