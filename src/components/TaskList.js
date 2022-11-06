import React, { useState } from "react";
import Task from "./Task";
import "../Styles/TaskList.css";
import Context from "./Context";
import { Link, Routes, Route, useLocation } from "react-router-dom";

const TaskList = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Application Setup",
      status: "done",
      contexts: [
        {
          title: "New sprint, tasks and intro information 1",
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
          title: "New sprint, tasks and intro information 2",
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
          title: "New sprint, tasks and intro information 3",
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
      id: 4,
      title: "Connect Admin with Frontend",
      status: "active",
      contexts: [
        {
          title: "New sprint, tasks and intro information 4",
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
          title: "New sprin, tasks and intro information ",
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

  const location = useLocation();
  console.log(location);
  const id = location.state;
  console.log(id);

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
      {/* <div className='bussinesContext'>
        <Context
          context={taskList.find((elemet) => elemet.status === "active")}
        />
      </div> */}
      <Routes>
        <Route
          path='/task/:id'
          element={
            <div className='bussinesContext'>
              <Context context={taskList.find((elemet) => elemet.id === id)} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default TaskList;
