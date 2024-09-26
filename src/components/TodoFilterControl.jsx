import React, { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeFilterStatus } from "../slice/todoSlice";
// import { CHANGE_FILTER_STATUS } from "../actions/type";
// import { changeFilterStatus } from "../actions";

let statuses = [
    { id: "all", title: "All" },
    { id: "active", title: "Active" },
    { id: "completed", title: "Completed" }
]

const TodoFilterControl = () => {
//    const [filterStatus,setFilterStatus]= useState(store.getState().todoReducer.filterStatus)
//     // let filterStatus = store.getState().filterStatus;

// const handleThemeChange=(newStatus)=>{
//     console.log(newStatus)
    // by creation "action Object"
    //payload you send something which is going somewhare
    // payload is any thing
    // primitive (number boolean string,object)
// store.dispatch({
//     // type:"CHANGE_FILTER_STATUS",
//     type:CHANGE_FILTER_STATUS,
//     payload:{    
//        status:newStatus
//     }
// })
// store.dispatch(changeFilterStatus(newStatus))
// }
// useEffect(()=>{
//     store.subscribe(()=>{
//         setFilterStatus(store.getState().todoReducer.filterStatus)
//     })
// },[])
// // console.log(filterStatus)

const filterStatus= useSelector(state=>state.todoReducer.filterStatus)
const dispatch=useDispatch()
    return (
        <div className="control-btn group">
            {statuses.map((status, idx) => {
                return (
                    <button
                        id={status.id}
                        className={filterStatus === status.id ? "btn active" : "btn"}
                        key={idx}
                        onClick={()=>dispatch(changeFilterStatus(status.id))}
                    >
                        {status.title}
                    </button>
                )
            }
            )}
        </div>
    );
};

export default TodoFilterControl;