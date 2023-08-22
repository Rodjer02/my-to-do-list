import { useState } from "react";
import Form from "../Form/Form";

export default function AddTask({ tasks, setTask }) {
  const [inputValue, setInputValue] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    const newTasks = [...tasks];
    newTasks.push({
      title: inputValue,
      id: new Date().getTime(),
    });
    setTask(newTasks);
    setInputValue("");
  };
  return (
    <div className="newTask" style={{ marginBottom: "30px" }}>
      <Form
        placeholder={"What is the task to day?"}
        value={"Add Task"}
        onClick={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}
