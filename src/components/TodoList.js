import { React } from "react";
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {/* displaying list-items one by one from the todo-array */}
                {filteredTodos.map(todo => (
                    <Todo
                        setTodos={setTodos} 
                        todos={todos} 
                        todo={todo}
                        key={todo.id}
                        text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;