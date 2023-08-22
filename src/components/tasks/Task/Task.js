import { useState } from "react";
import TaskGener from "./TaskGener/TaskGener";
import TaskEdit from "./TaskEdit/TaskEdit";

function Task({ tasks, setTask, el }) {
  const [inputValue, setInputValue] = useState("");
  const [changeState, setChangeState] = useState(false);

  return (
    <div className="tasksContainer" style={{ width: "100%" }}>
      {changeState ? (
        <TaskEdit
          tasks={tasks}
          setChangeState={setChangeState}
          setTask={setTask}
          el={el}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        <TaskGener
          tasks={tasks}
          setChangeState={setChangeState}
          setTask={setTask}
          el={el}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
}

export default Task;
