import React from "react";
import "../Styles/Context.css";
import ContextHeader from "./ContextHeader";
import Content from "./Content";

const Context = ({ context }) => {
  return (
    <div className='context'>
      <ContextHeader />
      <Content context={context.contexts} />
    </div>
  );
};

export default Context;
