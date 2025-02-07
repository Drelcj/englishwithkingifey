"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CardWrapper from "../card-wrapper";
import { LoginSchema } from "@/schemas";
import { FormError } from "../form-error";
import { login } from "@/actions/login";
// import GoogleLogin from "../google-login";
import Link from "next/link";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        setLoading(true);
        login(data).then((res) => {
            if (res.error) {
                setError(res.error);
                setLoading(false);
            } else {
                setError("");
                setLoading(false);
                // In a real app, you might handle client-side redirect after successful credential login here,
                // or rely on server-side redirect from the action if you are handling redirect in login action.
            }
        });
    };

    return (
        <CardWrapper
            headerLabel="Log in to your account"
            title="Login"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register here."
            showSocial
        >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...form.register("email")}
                            placeholder="john@doe.com"
                            type="email"
                            className="input input-bordered w-full"
                        />
                        <div className="text-blue-500">
                            {form.formState.errors.email && form.formState.errors.email.message}
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...form.register("password")}
                            placeholder="********"
                            type="password"
                            className="input input-bordered w-full"
                        />
                        <div className="text-blue-500">
                            {form.formState.errors.password && form.formState.errors.password.message}
                        </div>
                    </div>

                    <Link href="/auth/reset" className="btn btn-link px-0 font-normal">
                        Forgot password?
                    </Link>
                </div>

                <FormError message={error} />
                <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </form>
            {/* <GoogleLogin /> */}
        </CardWrapper>
    );
};

export default LoginForm;