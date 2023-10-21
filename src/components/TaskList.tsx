import React from 'react';
import { Task } from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <strong>ID:</strong> {task.id}
            </div>
            <div>
              <strong>Title:</strong> {task.title}
            </div>
            <div>
              <strong>Status:</strong> {task.status}
            </div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList
