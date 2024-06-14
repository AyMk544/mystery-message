import { z } from "zod";

export const usernameValidation = z
.string()
.min(2, "username must be atleast of 2 characters")
.max(20, "max character limit reached")
.regex(/^[a-zA-Z0-9_]+$/,"username must not contain special characters")

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"invalid email address"}),
    password: z.string().min(6, {message: "password must be atleast 6 characters"})
})