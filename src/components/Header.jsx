import React, { useEffect } from "react";
import SwitchToDarkIcon from "../images/icon-moon.png";
import SwitchToLightIcon from "../images/icon-sun.png";
// import store from "../todoStore";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../slice/preferencesSlice";
// import { toggleDarkmode } from "../actions";

const Header = () => {
// with useSelector => not only read state but also suscribe to thet state(any changes in that sate
//wiil automatically re-render the conponet for us)

  // const isDarkMode=store.getState().preferencesReducer.isDarkMode
  // // console.log(isDarkMode)
  const isDarkMode=useSelector(state=>state.preferencesReducer.isDarkMode)
  const getThemeIcon = (isDarkMode) => {
    return isDarkMode ? SwitchToLightIcon : SwitchToDarkIcon;
  }
  const dispatch=useDispatch()


  const changeTheme = () => {
    dispatch(toggleDarkmode());
   
  };
  // // const changeTheme = () => {
  // //   store.dispatch({
  // //     type:'TOGGLE_DARK_MODE'
  // // });
   
  // // };


  // useEffect(()=>{
  //   store.subscribe(()=>{
  //     let isDarkMode=store.getState().preferencesReducer.isDarkMode;
  //     document.getElementById("themeIcon").src=getThemeIcon(isDarkMode)
  //     // const $imageEl= document.getElementById("themeIcon")
  //     // const newvalue= store.getState().preferencesReducer.isDarkMode
  //     // $imageEl.src= getThemeIcon(newvalue)
  //   })
  // },[])

  //usltimatilly ites return store.getState()



  let themeIcon = getThemeIcon(isDarkMode);
  return (
    <header>
      <h1>TODO</h1>
      <button className="btn" onClick={changeTheme}>
        <img id="themeIcon" src={themeIcon} alt="Dark Theme" style={{marginTop:"50px"}} width={"30px"} height={"30px"}/>
      </button>
    </header>
  );
};

export default Header;