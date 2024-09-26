import React from "react";
import IconCheck from "../images/icon-check.png";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../slice/todoSlice";

const TodoListItem = ({ todo }) => {


const dispatch= useDispatch()
  const classes = todo.completed ? "completed" : "";
  const checkIcon = todo.completed ? (
    <img src={IconCheck} alt="Completed" width={"30px"} height={"30px"} style={{borderRadius:"50%"}}/>
  ) : (
    ""
  );


  const handleToggletodo=()=>{
    dispatch(toggleTodo(todo.id))
  }
  return (
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={todo.completed}
      />
      <div className="checkbox-border-wrap" onClick={handleToggletodo}>
        <span className="checkbox">
          {checkIcon}
        </span>
      </div>
      <p>{todo.content}</p>
    </li>
  );
};

export default TodoListItem;
