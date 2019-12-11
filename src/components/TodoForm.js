import React, { useState, useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/TodoReducer';
import Button from '@material-ui/core/Button';
import { TodoList } from "./TodoList";


export const TodoForm = () => {
    const [todo, dispatch] = useReducer(TodoReducer, initialState);
    const [newItem, setNewItem] = useState("");
  
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_NEW_TODO", payload: newItem});       
        setNewItem("");
    };
    const clearCompleted = () => {
        dispatch({type: "DELETE"})
    }
  
    const handleChanges = e => {
        setNewItem(e.target.value);
      };
    
      return (
          <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            id="item"
            value={newItem}
            onChange={handleChanges}
            placeholder='Add Todo'
          />
          <Button variant='outlined' color='primary' onClick={handleSubmit}>Add</Button>
          <Button variant='outlined' color='secondary'  onClick={clearCompleted} >
        Delete
      </Button>
        </form>
        
            <TodoList todo={todo} dispatch={dispatch}/>
        </div>
      );
    }





