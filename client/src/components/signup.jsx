import { useState } from "react";
import {useForm} from "react-hook-form";
import {Button, Input} from "./index"
import { Link } from "react-router-dom";
import services from "../services/services.js";



function Signup() {

    const [error, setError] = useState("");
    const {register, handleSubmit} = useForm();
    const signup = async(data)=>{
        const userAccount =  await services.createAccount(data);
        console.log(userAccount)
    }
    return (
        <div className="flex items-center justify-center py-16">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl  p-10 border border-black/10">
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">Already have an Account? &nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline">Login
                    </Link>
                </p>
              {error && (<p className="text-red-600 mt-8 text-center">{error}</p>)}
                <form onSubmit={handleSubmit(signup)}>
                    <Input
                     label="Name: "
                     type="text"
                     placeholder="Enter your name"
                     className="mb-6"
                     {...register("name",{
                        required:true
                     })}
                     />
                     <Input 
                     label="Email: "
                     type="email"
                     placeholder="Enter your email"
                     className="mb-6"
                     {...register("email",{
                        required:true,
                        validate:{
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email Address must be a valid address!",
                        }
                     })}
                     />
                     <Input
                      label="Password:" 
                      type="password"
                      placeholder="Enter your password"
                      className="mb-6"
                      { ...register("password",{
                        required:true,
                        minLength:8,
                        maxLength:256
                      })
                      }
                      />
                     <Button 
                      type="submit"
                      className="my-6 w-2/3 block bg-violet-600 text-white mx-auto"
                      >
                        Signup
                     </Button> 
                </form>


            </div>
        </div>
    )
}


export default Signup;