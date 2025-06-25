import { z } from "zod";

export const signUpSchema = z.object({
    fName: z.string(
        {
            required_error: 'Please enter your name',
            invalid_type_error: 'Please enter a valid name'
        })
        .nonempty({ message: "First name is required" })
        .min(2, { message: "First name must be at least 2 characters long" })
        .max(30, { message: "First name cannot exceed 30 characters" }),
    lName: z.optional(z.string(
        {
            invalid_type_error: 'Please enter a valid name'
        })
        .max(30, { message: "Last name cannot exceed 30 characters" })),
    username: z.string(
        {
            required_error: "Username is required"
        })
        .nonempty({ message: 'Username is required' })
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(30, { message: "Username cannot exceed 30 characters" })
        .refine((username) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(username), {
            message: "Invalid username. Usernames must contain only alphabets, digits, and underscores, and cannot start with a digit."
        }),
    email: z.string(
        {
            required_error: "Email is required"
        }
    ).email()
        .nonempty({ message: 'Email is required' }),
    password: z.string(
        {
            required_error: "Password is required"
        })
        .nonempty({ message: 'Password is required' })
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(48, { message: "Password cannot exceed 48 characters" })
})







export const loginSchema = z.object({
    username: z.string({ required_error: "username or email is required" })
        .min(3, { message: "username or email must be at least 3 characters long" }),
    // .regex(/^(?!\d)[A-Za-z0-9_@]+$|^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/,{message: "Enter a valid username or email"})
    password:
        z.string({ required_error: "password is required" })
            .min(6, { message: "password must be at least 6 characters long" })
            .max(30, { message: "username or email cannot exceed 30 characters" })
})