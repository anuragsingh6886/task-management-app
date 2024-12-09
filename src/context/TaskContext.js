import React, { createContext, useReducer, useMemo } from 'react';
import { taskReducer } from '../reducers/taskReducer.js';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Memoized task statistics
  const taskStats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length
  }), [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch, taskStats }}>
      {children}
    </TaskContext.Provider>
  );
};