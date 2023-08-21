import Button from "./components/button/button";
import Input from "./components/input/input";
import NewTask from "./components/tasks/newTask";
import { useState } from "react";
import "./style.css";

function App() {

  const [tasks, setTaks] = useState([])
  const [text, setText] = useState('')
  function textInp(e) {
    const newText = '' || e.currentTarget.value
    setText(newText)
  }
  const addTask = (e) => {
    e.preventDefault();
    const newTasks = [ ...tasks ]
    newTasks.push(text)
    setTaks(newTasks)
    setText('')
  }
  return (
    <div className="taskBox">
      <h1 style={{marginBottom: '30px'}}>Get Thing Done</h1>
      <div className="newTask">
        <Input placeholder={'What is the task to day?'} textInp={ textInp }/>
        <Button value={'Add Task'} Click={ addTask }/>
      </div>
      <NewTask taskArray={ tasks }/>
    </div>
  );
}

export default App;
