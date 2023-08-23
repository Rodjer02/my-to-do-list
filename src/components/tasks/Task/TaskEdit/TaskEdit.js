import Form from "../../../Form/Form";
import { useState } from "react";

function TaskEdit({ setChangeState, setTasks, task, tasks }) {
  const [inputValue, setInputValue] = useState(task.title);
  const updateEdit = () => {
    const newTaskArray = [...tasks];
    newTaskArray.filter((elem, i, arr) => {
      if (inputValue === "") return;
      if (elem.id === task.id) {
        arr[i] = { ...elem, title: inputValue };
      }
      setChangeState(false);
    });
    setTasks(newTaskArray);
  };

  return (
    <div className="newTask" key={task.id}>
      <Form
        placeholder={"Update task"}
        value={"Update"}
        onClick={updateEdit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default TaskEdit;
