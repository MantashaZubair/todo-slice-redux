import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";
import store from "./todoStore";
import { useSelector } from "react-redux";

export default function App() {
  //  const [isDarkMode, setIsDarkMode] = useState(store.getState().isDarkMode);
  // const isDarkMode=store.getState().preferencesReducer.isDarkMode
  const isDarkMode=useSelector(state=>state.preferencesReducer.isDarkMode)
  const themeClass = isDarkMode ? "dark" : "light";
  // useEffect(()=>{
  //   store.dispatch({
  //     type:'TOGGLE_DARK_MODE'
  //   })
  // },[isDarkMode])
  // console.log(isDarkMode)

   console.log(themeClass)
  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header/>
        <main>
          <TodoWrapper 
            isDarkMode={isDarkMode} 
          />
        </main>
      </div>
    </div>
  );
}