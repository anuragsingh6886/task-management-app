import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskStatistics = () => {
  const { taskStats } = useContext(TaskContext);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Task Statistics</h5>
        <p>Total Tasks: {taskStats.total}</p>
        <p>Completed: {taskStats.completed}</p>
        <p>Pending: {taskStats.pending}</p>
      </div>
    </div>
  );
};