import React from "react";

import "./TaskColumn.scss";
import TaskCard from "../TaskCard/TaskCard";
import { Droppable } from "react-beautiful-dnd";

const TaskColumn = ({ id, droppableId, title, tasks }) => {
  console.log("columnId", droppableId);
  console.log("id", id);
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          className="task-column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h3>{title}</h3>
          {tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              draggableId={task.id}
              index={index}
              title={task.title}
              due={task.due}
              assignees={task.assignees}
              overdue={task.overdue}
              completed={task.completed}
              pastDue={task.pastDue}
            />
          ))}
          {provided.placeholder}
          <span className="add-task">+ Add Task</span>
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;
