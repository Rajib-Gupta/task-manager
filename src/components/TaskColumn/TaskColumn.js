import React from 'react';

import './TaskColumn.scss';
import TaskCard from '../TaskCard/TaskCard';

const TaskColumn = ({ title, tasks }) => {
    return (
      <div className="task-column">
        <h3>{title}</h3>
        {tasks.map((task, index) => (
          <TaskCard 
            key={index}
            title={task.title}
            due={task.due}
            assignees={task.assignees}
            overdue={task.overdue}
            completed={task.completed}
            pastDue={task.pastDue}
          />
        ))}
        <span className="add-task">+ Add Task</span>
      </div>
    );
  };

export default TaskColumn;
