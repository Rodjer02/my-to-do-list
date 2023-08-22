import Form from "../../../Form/Form";

function TaskEdit({
  setInputValue,
  setChangeState,
  setTask,
  inputValue,
  el,
  tasks,
}) {
  const updateEdit = () => {
    const newTaskArray = [...tasks];
    newTaskArray.filter((elem, i, arr) => {
      if (elem.id === el.id) {
        arr[i] = { ...elem, title: inputValue };
      }
      setChangeState(false);
    });
    setTask(newTaskArray);
  };

  return (
    <div className="newTask" key={el.id}>
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
