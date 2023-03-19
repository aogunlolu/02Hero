import React, { useState } from "react";

const UpdateTask = ({todo, setTodo}) => {
  const [newTask, setNewTask] = useState("");




  // Add task
  const addTask = () => {
    if ({ newTask }) {
      let num = todo.length + 1;
      let newEntry = {
        id: num,
        time: new Date().toLocaleString(),
        title: newTask,
        status: false,
      };
      setTodo([...todo, newEntry]);
      setNewTask("");
    
    }
  };
 
  return (
    <>
      <div className="flex gap-x-3 mx-4 ">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="rounded px-2 py-2 border-inherit outline-0 w-9/12"
        />
        <button
          onClick={addTask}
          className="bg-lime-600 text-white rounded px-2 py-2 w-3/12"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default UpdateTask;