"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CardWrapper from "../card-wrapper";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";
import GoogleLogin from "../google-login";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    register(data).then((res) => {
      if (res.error) {
        setError(res.error);
        setLoading(false);
      }
      if (res.success) {
        setError("");
        setSuccess(res.success);
        setLoading(false);
      }
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account"
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
              placeholder="johndoe@email.com"
              type="email"
              className="input input-bordered w-full"
            />
            <div className="text-blue-500">
              {form.formState.errors.email && form.formState.errors.email.message}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...form.register("name")}
              placeholder="John Doe"
              className="input input-bordered w-full"
            />
            <div className="text-blue-500">
              {form.formState.errors.name && form.formState.errors.name.message}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...form.register("password")}
              placeholder="******"
              type="password"
              className="input input-bordered w-full"
            />
            <div className="text-blue-500">
              {form.formState.errors.password && form.formState.errors.password.message}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              {...form.register("passwordConfirmation")}
              placeholder="******"
              type="password"
              className="input input-bordered w-full"
            />
            <div className="text-blue-500">
              {form.formState.errors.passwordConfirmation &&
                form.formState.errors.passwordConfirmation.message}
            </div>
          </div>
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      <GoogleLogin />
    </CardWrapper>
  );
};

export default RegisterForm;
