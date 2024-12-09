import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import { TaskInput } from './components/TaskInput';
import { TaskStatistics } from './components/TaskStatistics';
import { TaskItem } from './components/TaskItem';
import { TaskContext } from './context/TaskContext';

function App() {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <TaskProvider>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h1 className="h3 mb-0">Task Management Dashboard</h1>
              </div>
              <div className="card-body">
                <TaskInput />
                <TaskStatistics />
                <div className="task-list">
                  <TaskContext.Consumer>
                    {({ tasks }) => (
                      tasks.map(task => (
                        <TaskItem key={task.id} task={task} onEdit={setEditingTask} editingTask={editingTask} />
                      ))
                    )}
                  </TaskContext.Consumer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;