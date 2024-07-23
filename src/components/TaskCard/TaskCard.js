import React from 'react';
import './TaskCard.scss';

const TaskCard = ({ title, due, assignees, overdue, completed, pastDue }) => {
    const taskClasses = ['task'];
    if (overdue) taskClasses.push('overdue');
    if (completed) taskClasses.push('completed');
    if (pastDue) taskClasses.push('past-due');
  
    return (
      <div className={taskClasses.join(' ')}>
        <h4>{title}</h4>
        <p>Due: {due}</p>
        <div className="assignees">
          {assignees.map((assignee, index) => (
            <div key={index} className="assignee">{assignee}</div>
          ))}
        </div>
      </div>
    );
  };

export default TaskCard;
