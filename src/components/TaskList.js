import React, { useState } from "react";
import Task from "./Task";
import "../Styles/TaskList.css";
import Context from "./Context";

const TaskList = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Application Setup",
      status: "done",
      contexts: [
        {
          title: "New sprint, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "new",
          id: 1,
        },
        {
          title: "Apllication Has been accepted",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "active",
          id: 2,
        },
        {
          title: "New sprin, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: new Date(),
          status: "notActive",
          id: 3,
        },
      ],
    },
    {
      id: 2,
      title: "Static Books List",
      status: "done",
      contexts: [
        {
          title: "New sprint, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "new",
          id: 1,
        },
        {
          title: "Apllication Has been accepted",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "active",
          id: 2,
        },
        {
          title: "New sprin, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: new Date(),
          status: "notActive",
          id: 3,
        },
      ],
    },
    {
      id: 3,
      title: "Administation Panel",
      status: "done",
      contexts: [
        {
          title: "New sprint, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "new",
          id: 3,
        },
        {
          title: "Apllication Has been accepted",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "active",
          id: 2,
        },
        {
          title: "New sprin, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: new Date(),
          status: "notActive",
          id: 3,
        },
      ],
    },
    {
      id: 4,
      title: "Connect Admin with Frontend",
      status: "active",
      contexts: [
        {
          title: "New sprint, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "new",
          id: 1,
        },
        {
          title: "Apllication Has been accepted",
          content: "",
          author: "Jon Doe",
          created: "",
          status: "active",
          id: 2,
        },
        {
          title: "New sprin, tasks and intro information",
          content: "",
          author: "Jon Doe",
          created: new Date(),
          status: "notActive",
          id: 3,
        },
      ],
    },
    {
      id: 5,
      title: "Book Review Feature",
      status: "blocked",
      contexts: [],
    },
  ]);

  return (
    <div className='content'>
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
      <div className='bussinesContext'>
        <Context
          context={taskList.find((elemet) => elemet.status === "active")}
        />
      </div>
    </div>
  );
};

export default TaskList;
