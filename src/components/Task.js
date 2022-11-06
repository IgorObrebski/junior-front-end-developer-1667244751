import React from "react";

const Task = ({ title, id, status }) => {
  const isStatus = status;

  return (
    <div className='task'>
      {isStatus === "done" ? (
        <div className='done'></div>
      ) : isStatus === "active" ? (
        <div className='active'></div>
      ) : (
        <div className='blocked'></div>
      )}
      {/* <div className='arrow'></div> */}
      <span>{title}</span>
    </div>
  );
};

export default Task;
