
import {configureStore} from "@reduxjs/toolkit"
import reducersMapping from "./slice"
const store=configureStore({reducer:reducersMapping})
export default store















// import combineReducers from "./library/combineReducers"
// import createStore from "./library/createStore"
// import rootReducer from "./reducers"
/**
//  * Agenda:we want to cleanip todoStore.js filr,& move the pices into relevent files & folders to
ensure readibilty & ,ore scalable codebase
 */
// action type
// export const TOGGLE_DARK_MODE="TOGGLE_DARK_MODE"
// export const CHANGE_FILTER_STATUS="CHANGE_FILTER_STATUS"

// action type end

// // action creator
// export function changeFilterStatus(status){
//   return {
//     type:CHANGE_FILTER_STATUS,
//     payload:status
//   }
// }
// export function toggleDarkmode(){
//   return {
//     type: TOGGLE_DARK_MODE
//   }
// }

// // action creator end here

// preferences reducer
// function preferencesReducer(state={isDarkMode:false},action){
//   switch(action.type){
//     case TOGGLE_DARK_MODE:
//     return{
//       ...state,
//       isDarkMode:!state.isDarkMode
//     }
//     default:
//     return state
//   }

// }
// function todoReducer(state={filterStatus:"All"},action){
//     switch(action.type){
//       case CHANGE_FILTER_STATUS:
//         return{
//           ...state,
//           filterStatus:action.payload
//         }
//         default:
//           return state;
//     }
// }


// const INITIAL_STATE={
//   isDarkMode:false,
//   filterStatus:"All"
// }
// function handler(state){
// state.isDarkMode=!state.isDarkMode;
// }
// const changeFilterStatus=(newStatus)=>{
//    state.filterStatus=newStatus
// }

// redebility
// uniformity
// SEPERATIOM OF CONCERN
// SINGLE SOURSE OF TRUTH

/*
WE WILL MAKE SURE THAT IT BECOMES THE RESPONSIBILITY OF THE REDUCE
TO INITIALIZE THE STORE , INSTEAD OF THE LIBRARY
*/
// const reducer=(state={isDarkMode:false,
//   filterStatus:"All"},action)=>{
 
//   switch(action.type){
//     case TOGGLE_DARK_MODE:
//       // state.isDarkMode=!state.isDarkMode
//       return {
//         ...state,
//         isDarkMode:!state.isDarkMode
//       }
      
//       case CHANGE_FILTER_STATUS:
        
//         return {
//           ...state,
//           filterStatus:action.payload
//         }
        
   
//         default:
//           return state    
//   }
 
// }

// const store= createStore(/*INITIAL_STATE,*/reducer)

// const reducingMapping={
//   "preferencesReducer":preferencesReducer,
//   "todoReducer":todoReducer
// }



// const store= createStore(combineReducers(reducingMapping))
// const store=configureStore({reducer:reducersMapping})
// console.log(preferencesSlice.reducer)
// console.log(todoSlice)
// export default store