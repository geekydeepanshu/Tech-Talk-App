import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App(){
const theme = useSelector((state)=>state.theme.mode)
const htmlElement = document.querySelector("html");


useEffect(()=>{
  htmlElement.className=theme;
  },[theme])

return(
    <Outlet/>
  )}
export default App;