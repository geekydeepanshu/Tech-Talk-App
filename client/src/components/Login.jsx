import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index";
import services from "../services/services.js";
import { useDispatch } from "react-redux";
import {login as authLogin} from "../store/authSlice.js"
import { toast, ToastContainer } from "react-toastify";



function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();
    const login = async(data) => {
        try{
             const session =  await services.login(data);
             if(session){
             dispatch(authLogin(session.data))
             console.log("Login::session: ",session);
             toast.success("Hello!"); // toast not visible to user
             navigate("/")
        }
        }catch(error){
            console.log("Login:: catch-error:",error)
            toast.error(error.message);
        }
       
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                     <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400">Welcome back.</h2>
                     <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
                        Don't have an account?&nbsp;
                     <Link
                        to={"/signup"}
                        className="font-medium text-green-600 dark:text-green-400 hover:text-green-500">Sign Up
                     </Link>
                </p>
                </div>
               
                {/* {error && (<p className="text-red-600 mt-8 text-center">{error}</p>)} */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(login)}>
                    <div className="space-y-4">
                        <div>
                        <Input
                        label="Email: "
                        type="email"
                        placeholder="Enter your email..."
                        className="appearance-none mt-2 relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        {...register("email", {
                            required: true, validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email Address must be a valid address!",
                            }
                        })}
                    />
                        </div>
                        <div>
                             <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password..."
                        className="appearance-none mt-2 relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 256,
                        })}
                    />
                        </div>
                    </div>
                    
                   
                    <Button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Login
                    </Button>
                </form>
                <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300">OR</span>
                        </div>
                </div>
                <Button className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Continue with Google</Button>
            </div>
            <ToastContainer/>
        </div>
    )
}


export default Login;