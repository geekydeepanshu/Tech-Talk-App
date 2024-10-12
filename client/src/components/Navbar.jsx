import { NavLink } from "react-router-dom"
import {  useSelector } from "react-redux"
// import Container from "../container/container"
// import LogoutButton from "./LogoutButton"


export default function Navbar() {
  const {isLoggedIn} = useSelector((state)=>state.auth)

  

  const navItems = [
    {
      name:"Login",
      path:"/login",
      isEnabled: !isLoggedIn
    },
    {
      name:"Signup",
      path:"/signup",
      isEnabled: !isLoggedIn
    },{
      name:"All Posts",
      path:"/all-posts",
      isEnabled: isLoggedIn
    },
    {
      name:"Add Post",
      path:"/add-post",
      isEnabled: isLoggedIn
    },
  ]
  // @ts-ignore
  return (
    
    <header>
      {/* <Container> */}
      <div className={`h-12 flex flex-row  m-0 py-2 px-3 text-black shadow items-center box-border bg-slate-300`}>
        <NavLink to="/"><p className=" text-2xl font-medium">Blog App</p></NavLink>
        <div className="absolute right-0 mx-4   ">
          {navItems.map((item)=>(
              item.isEnabled?(
             <NavLink to={item.path} key={item.name} className={({ isActive }) => `${isActive ? "text-orange-500" : ""} mx-4 `} ><span className="text-md font-medium hover:text-orange-500 ">{item.name}</span></NavLink>):(null)
          ))}
         {/* {
          isLoggedIn && (
            <Button/>
          )
         } */}
          
        </div>
      </div>
      {/* </Container> */}
    </header>
  )
}

