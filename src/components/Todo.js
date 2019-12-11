  
import React from 'react';

export const Todo = props => {
    return (
      <div
        className={`item${props.item.completed ? " completed" : ""}`}
        onClick={() => props.toggleCompleted(props.item.id)}
      >
        <p>{props.item.task}</p>
      </div>
    );
  };
 


