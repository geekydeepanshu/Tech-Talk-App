import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index";

function Login() {
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();
    const login = (data) => console.log(data);
    return (
        <div className="flex items-center justify-center py-16">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don't have any account?&nbsp;
                    <Link
                        to={"/signup"}
                        className="font-medium text-primary transition-all duration-200 hover:underline">Signup
                    </Link>
                </p>
                {error && (<p className="text-red-600 mt-8 text-center">{error}</p>)}
                <form onSubmit={handleSubmit(login)}>
                    <Input
                        label="Email: "
                        type="email"
                        placeholder="Enter your email..."
                        className="mb-6"
                        {...register("email", {
                            required: true, validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email Address must be a valid address!",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password..."
                        className="mb-6"
                        {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 256,
                        })}
                    />
                    <Button
                        type="submit"
                        className="my-6 w-2/3 bg-indigo-600 shadow-md text-white mx-auto block "
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}


export default Login;