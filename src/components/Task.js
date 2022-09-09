import React from "react";
import "../stylesheets/Task.css"

import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({id, text, complete, completeTask, deleteTask}){
    return (
        <div className={complete ? 'task-container complete':'task-container' }>
             <div className="task-text"
                  onClick={()=> completeTask(id)}
             >
              {text}
             </div>
             <div className="task-container-icons"
                  onClick={()=> deleteTask(id)}
             >
                <AiOutlineCloseCircle className="task-icon" color="#FF0080"/>
             </div>
        </div>
    )
}
export default Task;