import { NavLink,Link } from "react-router-dom"
import {  useDispatch, useSelector } from "react-redux"
import {LogoutButton,Button} from "./index.js"
import { light,dark } from "../store/themeSlice.js"
// import Container from "../container/container"
// import LogoutButton from "./LogoutButton"


export default function Navbar(
  {
    className=""
  }
) {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  console.log("Navbar::isLoggedIn:",isLoggedIn);
  const theme = useSelector((state)=>state.theme.mode)
  console.log("Navbar::theme:",theme)
  const navItems = [
    {
      title:"Home",
      path:"/",
    },
    {
      title:"About",
      path:"/",
    },{
      title:"Write",
      path:"/",
    },
  ]

  const themeToggle = ()=>{
    console.log("Theme Toggle executed")
    if(theme=="light")
        dispatch(dark())
    if(theme=="dark")
        dispatch(light())  
  }

  // @ts-ignore
  return (
    
    <header className="light">
      {/* <Container> */}
      <nav className={`bg-transparent dark:bg-black dark:text-white flex justify-between items-center fixed w-full h-16 border-b border-black dark:border-white px-4 sm:px-8 md:px-16 lg:px-24 transition-colors duration-300 ${isLoggedIn?"bg-white":""}`}>
        <div>
          <NavLink to="/"><h1 className=" text-3xl font-bold font-serif tracking-tight">Tech-Talks</h1></NavLink>
        </div>
        <div>
        {isLoggedIn?(
          <div className="flex justify-between gap-x-6">
            <Link  className="flex items-center hover:text-green-600" to="/create">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"></path><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z"></path>
            </svg>
            <div className="hidden md:inline-block " >Write</div>
            </Link>
            <button onClick={themeToggle} className="p-2 rounded">{theme=="light"?(<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg>
):(<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>)}
            </button>
            <Link className="hover:text-green-600" to="/profile">
            <img src={"https://picsum.photos/100"} 
             className="w-9 h-9 rounded-full object-cover"
             alt="profile-image" />
            </Link>
          </div>
          ):(
          <div className="flex items-center gap-6 text-sm">
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item)=>(
                <li key={item.title} className="hover:text-green-600 transition-colors duration-300">
                 <NavLink to={item.path}>{item.title}</NavLink>
              </li>))}
            </ul>
            <div className="flex items-center gap-6">
              <Link to="/login">
                <button className="hidden sm:flex hover:text-green-600 transition-colors duration-300">Sign in</button>
              </Link>
              <Link to="/signup">
                <button className="text-white bg-black px-4 py-2 rounded-3xl dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300">Get started</button>
              </Link>
            </div>
          </div>
        )}
        </div>
      </nav>
      {/* </Container> */}
    </header>
  )
}

