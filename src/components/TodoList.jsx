import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoMenu from "./TodoMenu";

import { useSelector } from "react-redux";
const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([])
   const todos= useSelector(state=>state.todoReducer.todos)
    const isDarkMode=useSelector(state=>state.preferencesReducer.isDarkMode)
    const filterStatus= useSelector(state=>state.todoReducer.filterStatus)
  useEffect(() => {
    const handleFilterTodos = (todos, filterStatus) => {
      switch (filterStatus) {
        case "active":
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break  
        default:
          setFilteredTodos([...todos])
          break
      }
    };
console.log(filterStatus)
    handleFilterTodos(todos, filterStatus)
  }, [filterStatus,todos])
  

  // useEffect(()=>{
  //   store.subscribe(()=>{
  //     setFilterStatus(store.getState().todoReducer.filterStatus)
  //   })
  // },[])

  return (
    <>
      <section
        className={`todo-list-section ${
          isDarkMode && "todo-list-section-dark"
        }`}
      >
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no todos</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo, i) => (
              <TodoListItem
                todo={todo}
                key={todo.id}
                todos={todos}
              />
            ))}
          </ul>
        )}

        <TodoMenu todos={todos} />
      </section>
    </>
  );
};

export default TodoList;
