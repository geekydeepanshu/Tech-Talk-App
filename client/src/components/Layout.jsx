import { Navbar, Footer } from "./index"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"


function Layout({children}) {
    return (<>
        <Navbar />
        {children}
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        <Footer />
    </>)
}


export default Layout;

