import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Footer() {

    const foobarItems = [
        {
            path:"/",
            title:"Home",
        },
        {
            path:"/",
            title:"About",
        },
        {
            path:"/",
            title:"Contact",
        },
        {
            path:"/",
            title:"Categories",
        },
        {
            path:"/",
            title:"Privacy Policy",
        },
        {
            path:"/",
            title:"Sitemap",
        },
    ]



    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    return (
        <>
            
                    <footer className="md:h-16 py-6 md:py-0 flex md:items-center md:justify-center dark:bg-black dark:text-white bg-black md:bg-transparent text-white md:text-black border-t border-black dark:border-white px-4 sm:px-8 md:px-16 lg:px-32">
                        <div className="flex md:items-center flex-col md:flex-row justify-center gap-3 md:gap-6 text-sm">
                            {
                                foobarItems.map((item)=>(
                                    <NavLink className={`hover:text-green-600`} to={item.path} key={item.title}>
                                        {item.title}
                                    </NavLink>
                                ))
                            }
                        </div> 
                    </footer>
        </>)
}      

export default Footer;