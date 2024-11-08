import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    // useEffect(() => {
    if (isLoggedIn)
        return children;
    return navigate("/login");
    // }, [isLoggedIn])
}



export default ProtectedRoute;