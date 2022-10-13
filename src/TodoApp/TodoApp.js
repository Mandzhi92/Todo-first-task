import React from 'react';

import TaskList from '../TaskList';
import Footer from '../Footer';
import Header from '../Header';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './TodoApp.css'



const TodoApp = () => {

    let getTime = formatDistanceToNow(new Date(), {insludeSeconds: true})

    const todoData = [
        {label: 'Completed task', createTime: [getTime], id: 1},
        {label: 'Editing task', createTime: [getTime], id: 2},
        {label: 'Active task', createTime: [getTime], id: 3}
    ]

    return(

        <section className="todoapp">

            <Header/>

            <section className="main">

                <TaskList data = {todoData}/>
                <Footer/>
            </section>

        </section>

    )
    
}

export default TodoApp;