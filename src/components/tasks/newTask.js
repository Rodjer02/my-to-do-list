import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";

function NewTask({ taskArray }) {
    const [isVisible, setIsVisible] = useState(false)
    const [newText, setNewText] = useState("")
    const editText = (e) => {
        setNewText(e.currentTarget.value)
    }
    const editInp = (e) => {
       setIsVisible(true)
    }
    const cancelEdit = (e) => {
        setIsVisible(false)
    }

    return (<div style={{width: '80%'}}>
        {taskArray.map((el, index) => {
            return (
            <>
                { isVisible || <div className='task' key={index}>
                    <div style={{ width: '80%' }}>{el}</div>
                    <div style={{ display: "flex", justifyContent: 'space-between', width: '15%' }}>
                        
                        <Button value={<AiFillEdit/>} Click={editInp} />
                        <Button value={<AiFillDelete/>} />
                            </div>
                        
                </div>
                }
                {
                        isVisible &&
                        <div className="newTask">
                            <Input placeholder={'What is the task to day?'} textInp={editText}/>
                            <Button value={'Add Task'} Click={newText != ""? editText:cancelEdit }/>
                        </div>
                }
             </>
                    )
                })}
        </div>)
}

export default NewTask;