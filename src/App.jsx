import React, { useState } from "react";
import Buttons from "./components/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // khali na add ho
    setTasks([...tasks, task]);
    setTask(""); // input clear
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Clear All
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div>
      <h1 className="text-center italic text-3xl font-bold mt-10">
        My ToDo List
      </h1>

      {/* Form */}
      <div className="flex justify-center items-center mt-6 px-4">
        <form
          className="flex flex-row w-full gap-2 max-w-lg"
          onSubmit={addTask}
        >
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a Task"
            className="flex-1 px-3 py-2 border border-gray-400 rounded-md outline-none"
          />

          {/* Reusable Button */}
          <Buttons className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700" />
        </form>
      </div>

      {/* List */}
      <div className="mt-6 px-4 max-w-lg mx-auto">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-neutral-200 rounded-md py-2 px-3 mt-2"
          >
            <span>{t}</span>
            <button onClick={() => deleteTask(index)}>
              <FontAwesomeIcon
                icon={faTrash}
                className="text-red-600 cursor-pointer"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Clear All Button */}
      {tasks.length > 0 && (
        <div className="flex justify-center mt-6">
          <Buttons
            text="Clear All"
            className="bg-red-600 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-red-700"
            onClick={clearAll}
          />
        </div>
      )}
    </div>
  );
};

export default App;
