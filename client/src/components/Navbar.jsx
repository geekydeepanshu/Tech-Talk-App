import { NavLink,Link } from "react-router-dom"
import {  useSelector } from "react-redux"
import {LogoutButton,Button} from "./index.js"
// import Container from "../container/container"
// import LogoutButton from "./LogoutButton"


export default function Navbar() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
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
  // @ts-ignore
  return (
    
    <header className="light">
      {/* <Container> */}
      <nav className={`bg-transparent dark:bg-black dark:text-white flex justify-between items-center fixed w-full h-16 border-b border-black dark:border-white px-4 sm:px-8 md:px-16 lg:px-24 transition-colors duration-300`}>
        <div>
          <NavLink to="/"><h1 className=" text-3xl font-bold font-serif tracking-tight">Tech-Talks</h1></NavLink>
        </div>
        <div>
        {isLoggedIn?(
          <div className="flex justify-between gap-x-6">
            <Link  className="flex items-center hover:text-green-600" to="/">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"></path><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z"></path>
            </svg>
            <div className="hidden md:inline-block " >Write</div>
            </Link>
            <Button className="p-2 rounded hover:text-green-600">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path></svg>
            </Button>
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

