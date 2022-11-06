import React from "react";
import Topics from "./Topics";
import "../Styles/Content.css";
import Details from "./Details";

const Content = ({ context }) => {
  return (
    <div className='businessContent'>
      <Topics context={context} />
      <Details context={context} />
    </div>
  );
};

export default Content;
