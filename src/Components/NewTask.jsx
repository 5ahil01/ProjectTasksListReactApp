import React, { useState } from "react";
import Button from "./Button";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    console.log("Something");
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div>
      <input
        type="text"
        className="w-64 px-2 py-1 mr-2 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button
        btnName="Add Task"
        className="text-stone-700 hover:text-stone-950"
        onClickFunction={handleClick}
      />
    </div>
  );
};

export default NewTask;
