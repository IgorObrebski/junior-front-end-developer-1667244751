import React from "react";
import "../Styles/Topic.css";


const Topic = ({ title, author, date, status }) => {
  return (
    <div
      className='topic'
      style={{
        backgroundColor:
          status === "new"
            ? "white"
            : status === "active"
            ? "white"
            : "transparent",
        boxShadow: status === "active" ? "5px 11px 14px -3px grey" : "",
      }}
    >
      <div className='topicHeader'>
        {status === "new" ? <div className='new'>new</div> : null}
        <span className='author'>{author}</span>
      </div>
      <div className='text'>
        <h3 style={{ color: status === "new" ? "#0165ff" : "null" }}>
          {title}
        </h3>
        <span>
          Hi Eric, congratulations on completing the previous assignment. This
          time you will have to focus on...
        </span>
      </div>
    </div>
  );
};

export default Topic;
