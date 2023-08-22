import Tasks from "./components/tasks/Tasks";
import { useState } from "react";
import "./style.css";
import AddTask from "./components/AddTaskForm/AddTask";

function App() {
  const [tasks, setTask] = useState([
    {
      title: "agrfg",
      id: 2,
    },
  ]);

  return (
    <div className="taskBox">
      <h1 style={{ marginBottom: "30px" }}>Get Thing Done</h1>
      <AddTask tasks={tasks} setTask={setTask} value="Add Task" />
      <Tasks tasks={tasks} setTask={setTask} />
    </div>
  );
}

export default App;
