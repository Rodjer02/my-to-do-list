import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import Button from "../../../button/Button";

function TaskGener({ tasks, task, setTask, setChangeState }) {
  const editTask = () => {
    setChangeState(true);
  };
  const deleteTask = () => {
    tasks = tasks.filter((elem, i, arr) => elem.id !== task.id);
    setTask(tasks);
  };
  return (
    <div className="task" style={{ width: "80%" }}>
      <div style={{ width: "80%" }}>{task.title}</div>
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
