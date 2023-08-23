import Task from "./Task/Task";

function Tasks({ tasks, setTasks }) {
  return (
    <div style={{ width: "100%" }}>
      {tasks.map((task, id, arr) => {
        return (
          <Task key={task.id} tasks={arr} setTasks={setTasks} task={task} />
        );
      })}
    </div>
  );
}

export default Tasks;
