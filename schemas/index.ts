import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z.string().min(2, {
    message: "Name is required and must be at least 2 characters.",
  }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
  passwordConfirmation: z.string().min(6, {
    message: "Password confirmation must be at least 6 characters.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});