import { useSelector } from "react-redux";
import { Navbar, Layout, Home as HomeComponent, LandingPage as LandingPageComponent } from "../components/index.js"
// import { useEffect } from "react";


function Home() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    console.log(isLoggedIn);
    return (
        isLoggedIn ? (
            <> <Navbar /><HomeComponent /></>) : (
            <Layout>
                <LandingPageComponent />
            </Layout>
        ))
}

export default Home;