import { React } from "react";

const Todo = ({ text, setTodos, todos, todo }) => {

    const deleteHandler = (e) => {
        //console.log(todo);
        //filtering the todos-array and re-setting the todos-array with setTodos 
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        //checking and comparing every item in the todo-array with the current item and changing the value accordingly. 
        setTodos(
            todos.map((item)=> {
                if(item.id === todo.id){
                    return {
                        ...item, completed: !item.completed,
                    };
                }
                return item;
            })
        )
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"> 
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;