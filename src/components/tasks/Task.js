import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";

function Task({ taskArray, setTask, el }) {
  const [changeState, setChangeState] = useState(false);
  const [newText, setNewText] = useState("");
  const editTask = () => {
    taskArray.filter((elem, i, arr) => {
      if (elem.id === el.id) {
        arr[i] = { ...elem };
        setChangeState(true);
        setTask(taskArray);
      }
      setNewText(el.title);
    });
  };
  const updateEdit = () => {
    const newTaskArray = [...taskArray];
    newTaskArray.filter((elem, i, arr) => {
      if (elem.id === el.id) {
        arr[i] = { ...elem, title: newText };
      }

      setChangeState(false);
    });
    setTask(newTaskArray);
  };
  const deleteTask = () => {
    taskArray = taskArray.filter((elem, i, arr) => elem.id !== el.id);
    setTask(taskArray);
  };

  return (
    <div className="tasksContainer" style={{ width: "100%" }}>
      {changeState ? (
        <div className="newTask" key={el.id}>
          <Input
            value={newText}
            placeholder={"What is the task to day?"}
            textInp={setNewText}
          />
          <Button value={"Add Task"} onClick={updateEdit} />
        </div>
      ) : (
        <div className="task" style={{ width: "80%" }}>
          <div style={{ width: "80%" }}>{el.title}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "15%",
            }}
          >
            <Button value={<AiFillEdit />} onClick={editTask} />
            <Button value={<AiFillDelete />} onClick={deleteTask} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
