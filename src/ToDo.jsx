import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

function ToDo() {
  let [val, setValue] = useState("");
  let [task, setTask] = useState([]);

  const handler = (event) => {
    setValue(event.target.value);
  };

  const addTask = () => {
    if (val.trim() !== "") {
      setTask([...task, val]);
      setValue("");
    }
  };

  const del = (taskItem) => {
    // Filter out the task that needs to be deleted
    const updatedTasks = task.filter((item) => item !== taskItem);
    setTask(updatedTasks);
  };

  return (
    <>
      <div className="relative top-[20vh] flex flex-col justify-center items-center bg-blue-400 px-6 py-10 rounded-lg mx-auto max-w-screen-sm">
        <Typography
          variant="h4"
          sx={{
            marginBottom: "16px",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
          }}
        >
          To-Do-List App
        </Typography>
        <div className="flex items-center mt-6 w-full justify-center md:w-[30vw]">
          <input
            type="text"
            placeholder="Add Your Task..."
            className="border-2 border-gray-500 focus:outline-none p-3 w-full rounded-full md:w-[25vw]"
            value={val}
            onChange={handler}
          />
          <Button
            variant="contained"
            onClick={addTask}
            sx={{
              borderRadius: "25px",
              marginLeft: "12px",
              padding: "2px 40px",
              position: "relative",
              left: "0",
              color:'black',
              backgroundColor: "yellow",
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            Add Task
          </Button>
        </div>
        <div className="mt-2">
          {task.map((taskItem, index) => (
            <div key={index} className="relative bg-white font-bold text-black rounded-md md:w-[30vw] text-center mt-2 w-[50vw]" style={{ marginBottom: '8px' }}>
              {taskItem}
              <button 
                className="absolute -top-1 right-1 text-red-500 " 
                onClick={() => del(taskItem)} // Pass taskItem to the del function
              >
                <DeleteIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToDo;
