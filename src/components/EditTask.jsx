import React from "react";


const EditTask = ({todo, setTodo, updateData, setUpdateData}) => {



  const cancleUpdate = () => {
    setUpdateData("");
  };

  //change task to update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      time: new Date().toLocaleString(),
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
    
  };
  

  // update task
  const updateTask = (e) => {
    let filterRecords = [...todo].filter((task) => task.id !== updateData.id);
    let updateRecords = [...filterRecords, updateData];
    setTodo(updateRecords);
    setUpdateData("");
   
  };
  return (
    <>
      <div className="flex gap-x-3 mx-4 my-4">
        <input
          value={updateData && updateData.title}
          onChange={(e) => changeTask(e)}
          type="text"
          className="rounded px-2 py-2 border-inherit outline-0 w-7/12"
        />
        <button
          onClick={updateTask}
          className="bg-lime-600 text-white rounded px-2 py-2 w-3/12"
        >
          Update
        </button>
        <button
          onClick={cancleUpdate}
          className="bg-yellow-500 text-white rounded px-2 py-2 w-2/12"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default EditTask