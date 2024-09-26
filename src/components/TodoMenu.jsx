import React, { useState, useEffect } from "react";
import TodoFilterControl from "./TodoFilterControl";
import store from "../todoStore";

const TodoMenu = ({ todos }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);
   const isDarkMode = store.getState().isDarkMode
  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  useEffect(()=>{
     store.subscribe(()=>{
      const newDarkMode= store.getState().isDarkMode
      const spanEl= document.getElementById("state-span")
      spanEl.innerText=newDarkMode?"dark":"light"
     })
  })

  return (
    <div className="todo-filter-control">
      <div className="todos-count">{leftTodoCount} items left</div>
       <div>the state of theme is:<span id="state-span">{isDarkMode?"dark":"light"}</span></div>
      <div className="control-btn group filter-control-for-desktop">
        <TodoFilterControl
        // filterStatus={filterStatus}
        // setFilterStatus={setFilterStatus}
        />
      </div>

      {/* <div className="control-btn">
        <button 
          className="btn" 
          // onClick={() => store.dispatch(clearCompletedTodos())}
        >
          Clear Completed
        </button>
      </div> */}
    </div>
    
  );
};

export default TodoMenu;
