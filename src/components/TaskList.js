import React, { useState } from "react";
import Task from "./Task";
import "../Styles/TaskList.css";

const TaskList = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Application Setup",
      status: "done",
      contexts: [],
    },
    {
      id: 2,
      title: "Static Books List",
      status: "done",
      contexts: [],
    },
    {
      id: 3,
      title: "Administation Panel",
      status: "done",
      contexts: [],
    },
    {
      id: 4,
      title: "Connect Admin with Frontend",
      status: "active",
      contexts: [],
    },
    {
      id: 5,
      title: "Book Review Feature",
      status: "blocked",
      contexts: [],
    },
  ]);

  return (
    <div className='taskList'>
      <header className='taskHeader'>YOUR TASKS</header>
      <div>
        {taskList.map((task) => (
          <Task
            title={task.title}
            id={task.id}
            key={task.id}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
