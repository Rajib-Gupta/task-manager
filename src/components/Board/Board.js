import React, { useState } from 'react';

import './Board.scss';
import TaskColumn from '../TaskColumn/TaskColumn';
import { DragDropContext } from 'react-beautiful-dnd';


const initialColumns = [
    {
      id: 'to-do',
      title: 'To Do',
      tasks: [
        { id: '1', title: 'PM Shop Drawing Review', due: 'TBD', assignees: ['KH', 'RM'] },
        { id: '2', title: 'Submit Shop Drawings', due: 'TBD', assignees: ['KH', 'RM'] },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: '3', title: 'Verify Local Contract Details', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], overdue: true },
        { id: '4', title: 'Central AR Review', due: 'Dec.5th 2022', assignees: ['KH', 'RM'] },
        { id: '5', title: 'Internal Start Up Meeting', due: 'Dec.14th 2022', assignees: ['KH', 'RM'] },
        { id: '6', title: 'Central AR Review', due: 'Dec.16th 2022', assignees: ['KH', 'RM'] },
      ],
    },
    {
      id: 'completed',
      title: 'Completed',
      tasks: [
        { id: '7', title: 'Upload IFC Drawings', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], completed: true },
        { id: '8', title: 'Const. Sched / Phasing / Del.', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], completed: true },
        { id: '9', title: 'Const. Sched / Phasing / Del.', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], pastDue: true },
      ],
    },
  ];
  const Board = () => {
    const [columns, setColumns] = useState(initialColumns);
  
    const onDragEnd = (result) => {
      const { source, destination } = result;
  
      if (!destination) {
        return;
      }
  
      const sourceColumnIndex = columns.findIndex(column => column.id === source.droppableId);
      const destinationColumnIndex = columns.findIndex(column => column.id === destination.droppableId);
  
      const sourceColumn = columns[sourceColumnIndex];
      const destinationColumn = columns[destinationColumnIndex];
  
      const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
      destinationColumn.tasks.splice(destination.index, 0, movedTask);
  
      const newColumns = [...columns];
      newColumns[sourceColumnIndex] = sourceColumn;
      newColumns[destinationColumnIndex] = destinationColumn;
  
      setColumns(newColumns);
    };
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {columns.map(column => (
            <TaskColumn key={column.id} droppableId={column.id} title={column.title} tasks={column.tasks} />
          ))}
        </div>
      </DragDropContext>
    );
  };
  

export default Board;
