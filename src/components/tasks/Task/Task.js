import { useState } from "react";
import TaskGener from "./TaskGener/TaskGener";
import TaskEdit from "./TaskEdit/TaskEdit";

function Task({ tasks, setTasks, task }) {
  const [changeState, setChangeState] = useState(false);

  return (
    <div className="tasksContainer" style={{ width: "100%" }}>
      {changeState ? (
        <TaskEdit
          tasks={tasks}
          setChangeState={setChangeState}
          setTasks={setTasks}
          task={task}
        />
      ) : (
        <TaskGener
          tasks={tasks}
          setChangeState={setChangeState}
          setTask={setTasks}
          task={task}
        />
      )}
    </div>
  );
}

export default Task;
