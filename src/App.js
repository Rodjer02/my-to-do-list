import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Tasks from "./components/tasks/Tasks";
import { useState } from "react";
import "./style.css";

function App() {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (text === "") return;
    const newTasks = [...tasks];
    newTasks.push({
      title: text,
      id: new Date().getTime(),
    });
    setTask(newTasks);
    setText("");
  };
  return (
    <div className="taskBox">
      <h1 style={{ marginBottom: "30px" }}>Get Thing Done</h1>
      <div className="newTask" style={{ marginBottom: "30px" }}>
        <Input
          value={text}
          placeholder={"What is the task to day?"}
          textInp={setText}
        />
        <Button value={"Add Task"} onClick={addTask} />
      </div>
      <Tasks taskArray={tasks} setTask={setTask} />
    </div>
  );
}

export default App;
