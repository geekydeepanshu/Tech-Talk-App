import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from "./index"
import { Link, useNavigate } from "react-router-dom";
import services from "../services/services.js";
import { login as authLogin } from "../store/authSlice.js"
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { signUpSchema } from "../validators/authValidator.js";




function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signUpSchema)
    });
    const signup = async (data) => {
        try {
            const response = await services.createAccount(data);
            if (response.status == 201) {
                dispatch(authLogin(response.data.user))
                toast.success(response.data.message, {
                    autoClose: 1000,
                    onClose: () => navigate("/")
                })

            }

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong...")
        }


    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400">Join <Link to={"/"} className="font-serif font-bold"> Tech Talks</Link></h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">Already have an Account? &nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-green-600 dark:text-green-400 hover:text-green-500">Login
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(signup)}>
                    <div className={`mb-8 ${Object.keys(errors).length ? "space-y-2" : "space-y-4"}`}>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="w-[48%]">
                                    <Input
                                        label="Name*"
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="appearance-none mt-2 relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                        {...register("fName")}
                                    />
                                </div>
                                <div className="w-[48%] relative">
                                    <Input
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="absolute bottom-0 appearance-none mt-2 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                        {...register("lName")}
                                    />
                                </div></div>
                            <div>
                                {errors.fName && (<p className="text-red-600 text-xs px-1 pt-2 ">{errors.fName?.message}</p>)}
                            </div>
                        </div>
                        <div>
                            <Input
                                label="Username*"
                                type="text"
                                placeholder="Enter your name"
                                className="appearance-none mt-2 relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                {...register("username")}
                            />
                            {errors.username && (<p className="text-red-600  text-xs px-1 pt-2 ">{errors.username?.message}</p>)}
                        </div>

                        <div>
                            <Input
                                label="Email*"
                                type="email"
                                placeholder="Enter your email"
                                className="appearance-none mt-1 relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                {...register("email")}
                            />
                            {errors.email && (<p className="text-red-600 text-xs px-1 pt-2 ">{errors.email?.message}</p>)}
                        </div>
                        <div>
                            <Input
                                label="Password*"
                                type="password"
                                placeholder="Enter your password"
                                className="appearance-none mt-1 relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                {...register("password")
                                }
                            />
                            {errors.password && (<p className="text-red-600 text-xs px-1 pt-2 ">{errors.password?.message}</p>)}
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="group relative w-full mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Signup
                    </Button>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300">OR</span>
                        </div>
                    </div>
                    <Button className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-md text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Continue with Google</Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}


export default Signup;