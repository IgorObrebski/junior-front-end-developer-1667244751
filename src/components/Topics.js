import React from "react";
import Topic from "./Topic";

const Topics = ({ context }) => {
  return (
    <div className='topicList'>
      <div>
        {context.map((topic) => (
          <Topic
            key={topic.id}
            title={topic.title}
            author={topic.author}
            date={topic.date}
            status={topic.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Topics;
