import React from 'react';
import './App.css';
import  { TodoForm } from './components/TodoForm';
import NavBar from './components/NavBar';

function App() {
 
  return (
    
      <div className="App">
        <NavBar/>
        <TodoForm />
      </div>
          
    
  );
}

export default App;
