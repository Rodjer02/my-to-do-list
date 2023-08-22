import Task from "./Task/Task";

function Tasks({ tasks, setTask }) {
  return (
    <div style={{ width: "100%" }}>
      {tasks.map((el, id, arr) => {
        return <Task key={el.id} tasks={arr} setTask={setTask} el={el} />;
      })}
    </div>
  );
}

export default Tasks;
