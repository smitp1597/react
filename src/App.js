import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form.js'
import TodoList from './components/TodoList.js'

function App() {

   //useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);

   //useEffect
   useEffect(() => {
      filterHandler();
   }, [todos, status]);


   //functions
   const filterHandler = () => {
      switch(status)
      {
         case 'completed':
         setFilteredTodos(todos.filter(todo => todo.completed === true));
         break;

         case 'uncompleted':
         setFilteredTodos(todos.filter(todo => todo.completed === false));
         break;

         default:
         setFilteredTodos(todos);
         break;
      }
   }

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
          setStatus={setStatus}
          status={status}
          setFilteredTodos={setFilteredTodos}
       />
       <TodoList 
         setTodos={setTodos} 
         todos={todos} 
         filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
