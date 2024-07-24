import React from "react";
import "./TaskCard.scss";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({
  index,
  draggableId,
  title,
  due,
  assignees,
  overdue,
  completed,
  pastDue,
}) => {
    console.log('draggableId', draggableId)

    const taskClasses = ['task'];
    if (overdue) taskClasses.push('overdue');
    if (completed) taskClasses.push('completed');
    if (pastDue) taskClasses.push('past-due');
  
    return (
      <Draggable draggableId={draggableId} index={index}>
        {(provided) => (
          <div
            className={taskClasses.join(' ')}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h4>{title}</h4>
            <p>Due: {due}</p>
            <div className="assignees">
              {assignees.map((assignee, index) => (
                <div key={index} className="assignee">{assignee}</div>
              ))}
            </div>
          </div>
        )}
      </Draggable>
    );
  };

export default TaskCard;
