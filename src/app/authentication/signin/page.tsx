"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { LoginFormData } from "@/types/auth"; 
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>(); 

  const onSubmit: SubmitHandler<LoginFormData> = async(data) => {
    const { email, password } = data;
    const { data:user, error } = await authClient.signIn.email({
        email: email,
        password: password,
});
    if (error) {
        alert(error.message || "Something went wrong");
    } else {
        alert("Login successful!");
        console.log("User:", user);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2 text-sm">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{String(errors.email.message)}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required" 
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{String(errors.password.message)}</p>
            )}
            
            {/* Forgot Password Link (Optional) */}
            <div className="text-right mt-1">
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-4"
          >
            Login
          </button>
        </form>

        {/* Redirect to Register */}
        <p className="text-center text-sm text-gray-600 mt-8 border-t pt-6">
          Don't have an account?{" "}
          <Link href="/authentication/register" className="text-blue-600 hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}