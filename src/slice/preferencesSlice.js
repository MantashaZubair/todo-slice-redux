import { createSlice } from "@reduxjs/toolkit"; // it uses the immerjs

const preferencesSlice=createSlice({
    name:"preferencesReducer",
    initialState:{
      isDarkMode:false,  
    },
    reducers:{
        toggleDarkmode:(state,action)=>{
            state.isDarkMode=!state.isDarkMode // we are giong creazy ,mutating the state
        }
    }
})
export const {toggleDarkmode}=preferencesSlice.actions
export default preferencesSlice.reducer