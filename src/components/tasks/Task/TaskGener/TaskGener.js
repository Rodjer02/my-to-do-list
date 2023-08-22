import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Button from "../../../button/Button";

function TaskGener({ tasks, el, setTask, setChangeState, setInputValue }) {
  const editTask = () => {
    tasks.filter((elem, i, arr) => {
      if (elem.id === el.id) {
        arr[i] = { ...elem };
        setChangeState(true);
        setTask(tasks);
      }
      setInputValue(el.title);
    });
  };
  const deleteTask = () => {
    tasks = tasks.filter((elem, i, arr) => elem.id !== el.id);
    setTask(tasks);
  };
  return (
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
  );
}

export default TaskGener;
