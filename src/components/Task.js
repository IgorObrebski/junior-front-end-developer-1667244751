import React from "react";
import { Link } from "react-router-dom";

const Task = ({ title, id, status }) => {
  const isStatus = status;

  return (
    <>
      <Link to={`/task/${id}`} className='task' state={id}>
        {isStatus === "done" ? (
          <div className='done'></div>
        ) : isStatus === "active" ? (
          <div className='active'></div>
        ) : (
          <div className='blocked'></div>
        )}
        <span>{title}</span>
      </Link>
    </>
  );
};

export default Task;
