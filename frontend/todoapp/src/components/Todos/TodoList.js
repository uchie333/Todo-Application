import React from 'react';
import Todo from './Todo';
import axios from 'axios';

const TodoList = ({ todos, setTodos, updateHandler }) => {

  const deleteHandler = (id) => {
    
    axios.delete(`http://localhost:8888/todos/${id}`)
      .then(res => {
        console.log(res);
        
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdate = (updatedTodo) => {
    axios.put(`http://localhost:8888/todos/${updatedTodo.id}`, updatedTodo)
      .then(res => {
        console.log(res.data);  
       
        setTodos(todos.map(item => {
          if (item.id === updatedTodo.id) {
            return res.data;  
          } else {
            return item;
          }
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  

  return (
    <div>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} updateHandler={handleUpdate} />;
      })}
    </div>
  );
};

export default TodoList;
