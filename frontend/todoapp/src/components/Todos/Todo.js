import React, { useState } from 'react';

const Todo = ({ todo, deleteHandler, updateHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState(todo.message);

  const handleInputChange = (e) => {
    setUpdatedMessage(e.target.value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    
    updateHandler({ id: todo.id, message: updatedMessage });

    
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            value={updatedMessage} 
            onChange={handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>{todo.message}</p> // Double-click to edit
      )}
      <button onClick={() => deleteHandler(todo.id)}>X</button>
    </div>
  );
};

export default Todo;

