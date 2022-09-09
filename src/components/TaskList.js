import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "../stylesheets/TaskList.css";


function TaskList(){
    const[tasks, setTasks]= useState([])

    const addTask = task =>{
        console.log("tarea agregada ", task)
        if (task.text.trim()){
            task.text = task.text.trim();
            const taskUpdated = [task, ...tasks];
            setTasks(taskUpdated)
        }
    }

    const deleteTask = id =>{
        console.log("tarea a eliminar ", id)
        const tasksUpdated = tasks.filter(task => task.id !== id)
        setTasks(tasksUpdated);
    }

    const completeTask = id =>{
        const tasksUpdated = tasks.map(task => {
            if (task.id === id){
                task.complete = !task.complete;
            }
            return task;
        })
        setTasks(tasksUpdated);
    }
    return(
        <>
        
            <TaskForm onSubmit={addTask}/>
            <div className="task-list-container">
            {
                tasks.map((task) =>
                    <Task 
                        text={task.text}
                        complete={task.complete}
                        key ={task.id}   
                        id={task.id}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />
                )
            }
            </div>
        </>
    )
}

export default TaskList;