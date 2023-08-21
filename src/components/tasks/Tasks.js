import Task from "./Task";

function allTask({ taskArray, setTaks }) {
  return (
    <div style={{ width: "100%" }}>
      {taskArray.map((el, id, arr) => {
        return <Task key={el.id} taskArray={arr} setTaks={setTaks} el={el} />;
      })}
    </div>
  );
}

export default allTask;
