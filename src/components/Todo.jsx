import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import UpdateTask from "./UpdateTask";
import EditTask from "./EditTask";


const Todo = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      time: new Date().toLocaleString(),
      title: "Software Engineer",
      status: false,
    },
    {
      id: 2,
      time: new Date().toLocaleString(),
      title: "Frontend Developer",
      status: false,
    },
    {
      id: 3,
      time: new Date().toLocaleString(),
      title: "UI Developer",
      status: false,
    },
  ]);
  
  const [updateData, setUpdateData] = useState("");
  
 
  // delete task
  const deleteTask = (id) => {
    let newTasks = todo.filter((task) => task.id !== id);
    setTodo(newTasks);
  };

  // mark task as done or completed
  const markDone = (id) => {
    let newTask = todo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTask);
  };

  return (
    <>
      <header className="min-h-screen bg-neutral-900">
        <div className="max-w-lg mx-auto pt-12">
          <h1 className="text-2xl font-extrabold py-8 px-8 text-center text-white">
            02Hero To Do List
          </h1>
          {updateData && updateData ? (
            <>
              <EditTask todo={todo} 
              setTodo={setTodo}
              updateData= {updateData}
              setUpdateData={setUpdateData} />
            </>
          ) : (
            <>
              <UpdateTask 
              todo={todo} 
              setTodo={setTodo} 
               />
              <p className="text-sm text-white text-center pt-4">
                {todo && todo.length ? "" : "No Task...."}
              </p>
            </>
          )}
          <div className=" py-2 px-4">
            {todo.map((props) => {
              return (
                <main
                  key={props.id}
                  className="bg-slate-300 mb-4 rounded px-2 py-2 flex items-center justify-between text-neutral-900"
                >
                  <div className={props.status ? "done" : ""}>
                    <div className="flex gap-x-2">
                      <p className="opacity-4">{props.time}</p>
                    </div>
                    <h3>{props.title}</h3>
                    <h4>{props.status}</h4>
                  </div>
                  <div className="flex gap-x-1.5 cursor-pointer ">
                    <IoIosCheckmarkCircle
                      onClick={(e) => markDone(props.id)}
                      title="Completed"
                      className="hover:text-red-800 text-lime-700"
                    />
                    {props.status ? null : (
                      <FaPen
                        onClick={() =>
                          setUpdateData({
                            id: props.id,
                            title: props.title,
                            status: props.status ? true : false,
                          })
                        }
                        title="Edit"
                        className="hover:text-red-800 text-lime-700"
                      />
                    )}
                    <MdDelete
                      onClick={() => deleteTask(props.id)}
                      title="Delete"
                      className="hover:text-red-800 text-lime-700"
                    />
                  </div>
                </main>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Todo;
