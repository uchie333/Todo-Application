import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

function Todos() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/todos', {})
            .then(res => {
                console.log(res)
                setTodoList(res.data)
            })
            .catch(err => {
                console.log(err)
            }) 
    }, [])

    return(
        <div>
            <h1>I've Got This!!!</h1>
            <TodoForm  todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} setTodos={setTodoList} />
        </div>
    )
}

export default Todos;