import { useNavigate } from "react-router-dom";
import { logout as authLogout} from "../store/authSlice.js";
import { useDispatch } from "react-redux";
function LogoutButton ({
    ...props
}){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logout = ()=> {
        dispatch(authLogout())
        navigate("/")
    }
    return(
        <button  
         onClick={logout}
         {...props}
         >
           Logout 
        </button>
    )

}

export default LogoutButton;