import React from "react";

const Buttons = ({ text, className, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={className}>
      {text || "Add Task"}
    </button>
  );
};
export default Buttons;
