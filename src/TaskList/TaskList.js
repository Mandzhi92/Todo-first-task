import React from 'react';
import Task from '../Task';
import './TaskList.css'

const TaskList = (prors) => {
    // console.log(prors.data)
    const elements = prors.data.map(item => {
        return (
            <li key = {item.id}>
                <Task label={item.label} createTime={item.createTime}/>
            </li>
        )
        
    })

    return(
        <ul className="todo-list">

            {elements} 
          
        </ul>
    )
    
}

export default TaskList;