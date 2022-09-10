import React, {useState} from 'react';
import "../stylesheets/TaskForm.css";
import {v4 as uuidv4} from 'uuid';

function TaskForm(props){

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
        // console.log(e.target.value)
    }

    const handleShipping = e =>{
        e.preventDefault(); 
    
        //console.log("enviando forms")
        if (input){
            const newTask = {
                id: uuidv4(),
                text: input,
                complete: false
            }
            //console.log(newTask)
            setInput("");
            props.onSubmit(newTask)
        }
     
}


return(
        <form className='task-form'
              onSubmit={handleShipping}    
        >
            <input
                id='input-task'
                className='input-task'
                type='text'
                placeholder='Write a task'
                name='text'
                onChange={handleChange}
                value={input}
            ></input>
            <button className='task-button'>
                Add task
            </button>
        </form>
    )

}

export default TaskForm;