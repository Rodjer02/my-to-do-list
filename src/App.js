import Tasks from "./components/tasks/Tasks";
import { useState } from "react";
import "./style.css";
import AddTask from "./components/AddTaskForm/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "agrfg",
      id: 2,
    },
  ]);

  return (
    <div className="taskBox">
      <h1 style={{ marginBottom: "30px" }}>Get Thing Done</h1>
      <AddTask tasks={tasks} setTasks={setTasks} value="Add Task" />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
export default App;
