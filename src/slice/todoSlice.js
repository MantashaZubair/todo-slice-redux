import {createSlice} from "@reduxjs/toolkit"


const todoSlice= createSlice({
    name:"todoReducer",
    initialState:{
        filterStatus:"all",
        todos:[]
    },
    reducers:{
     changeFilterStatus:(state,action)=>{
       state.filterStatus=action.payload
    }
,
addTodo:(state,action)=>{
    state.todos.push(action.payload)
},
toggleTodo:(state,action)=>{
  state.todos=state.todos.map(todo=>{
if(todo.id===action.payload){
   //completed status changes
   todo.completed=!todo.completed 
}
return todo
  })   
}
}

})

export const { changeFilterStatus,addTodo,toggleTodo}= todoSlice.actions
export default todoSlice.reducer;