import React from 'react';
import './TasksFilter.css'

const TasksFilter = () => {

    const buttons = [
        {label: 'All', id: 'all'},
        {label: 'Active', id: 'active'},
        {label: 'Completed', id: 'completed'}
    ]


    const labelBut = buttons.map(value => {
        return (
            <li key = {value.id}>
                <button>{value.label}</button>
            </li>
        ) 
    })

    return(
        <ul className="filters">
            {labelBut}
        </ul> 
    )
    
}

export default TasksFilter;