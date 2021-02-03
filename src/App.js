import React, {useState} from 'react';
import './App.css';
import Form from './components/form.js'
import TodoList from './components/TodoList.js'

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
       <header>
          <h1>Smit's To-do List</h1>
       </header>
       <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos} 
       />
       <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
