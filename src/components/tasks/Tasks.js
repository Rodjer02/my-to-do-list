import Task from "./Task";

function Tasks({ taskArray, setTask }) {
  return (
    <div style={{ width: "100%" }}>
      {taskArray.map((el, id, arr) => {
        return <Task key={el.id} taskArray={arr} setTask={setTask} el={el} />;
      })}
    </div>
  );
}

export default Tasks;
