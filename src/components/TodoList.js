import React from 'react';
import { Todo } from "./Todo";

export const TodoList = props => {
    
    console.log(props.todo);
    const toggleCompleted = id => {
        props.dispatch({ type: "TOGGLE_COMPLETE", payload: id})

    }

    

  return (
    <div>
      {props.todo.map(item => (
        <Todo 
        key={item.id} 
        item={item} 
        toggleCompleted={toggleCompleted} 
        />
      ))}
      
    </div>
  );
};
