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
            {
                isLoggedIn ? (<></>) : (
                    <footer className="md:h-16 py-6 md:py-0 flex md:items-center md:justify-center dark:bg-black dark:text-white bg-black md:bg-transparent text-white md:text-black border-t border-black dark:border-white px-4 sm:px-8 md:px-16 lg:px-32">
                        <div className="flex md:items-center flex-col md:flex-row justify-center gap-3 md:gap-6 text-sm">
                            {
                                foobarItems.map((item)=>(
                                    <NavLink className={`hover:text-green-600`} to={item.path} key={item.title}>
                                        {item.title}
                                    </NavLink>
                                ))
                            }
                            {/* <a class="hover:text-green-600" href="/">Home</a>
                            <a class="hover:text-green-600" href="/">About</a>
                            <a class="hover:text-green-600" href="/">Contact</a>
                            <a class="hover:text-green-600" href="/">Categories</a>
                            <a class="hover:text-green-600" href="/">Privacy Policy</a>
                            <a class="hover:text-green-600" href="/">Terms of Service</a>
                            <a class="hover:text-green-600" href="/">Sitemap</a>*/}
                        </div> 
                    </footer>
                )
            }
        </>
    )
}

export default Footer;