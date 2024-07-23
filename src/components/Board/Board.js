import React from 'react';

import './Board.scss';
import TaskColumn from '../TaskColumn/TaskColumn';

const Board = () => {
  return (
    <div className="board">
      <div className="columns">
        <TaskColumn title="To Do" tasks={[
          { title: 'PM Shop Drawing Review', due: 'TBD', assignees: ['KH', 'RM'] },
          { title: 'Submit Shop Drawings', due: 'TBD', assignees: ['KH', 'RM'] },
        ]} />
        <TaskColumn title="In Progress" tasks={[
          { title: 'Verify Local Contract Details', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], overdue: true },
          { title: 'Central AR Review', due: 'Dec.5th 2022', assignees: ['KH', 'RM'] },
          { title: 'Internal Start Up Meeting', due: 'Dec.14th 2022', assignees: ['KH', 'RM'] },
          { title: 'Central AR Review', due: 'Dec.16th 2022', assignees: ['KH', 'RM'] },
        ]} />
        <TaskColumn title="Completed" tasks={[
          { title: 'Upload IFC Drawings', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], completed: true },
          { title: 'Const. Sched / Phasing / Del.', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], completed: true },
          { title: 'Const. Sched / Phasing / Del.', due: 'Dec.2nd 2022', assignees: ['KH', 'RM'], completed: true, pastDue: true },
        ]} />
      </div>
    </div>
  );
}

export default Board;
