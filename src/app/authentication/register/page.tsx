"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { RegisterFormData } from "@/types/auth"; 
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { AnimatedToast } from "@/components/customToast/AnimatedToast";

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    const { email, password, name } = data;

    const { data: session, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
    });

    if (error) {
      AnimatedToast("Failed to register.", "error");
    } else {
      AnimatedToast("Registration successful!", "success");
      router.push("/authentication/signin");
    }
  };

  const googleSignIn = async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
  };

  return (
    <div className="min-h-screen bg-[#061e29] flex items-center justify-center px-4 py-12">
      <div className="bg-[#083344] p-8 rounded-2xl border border-[#06b6d4]/20 shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Create an Account</h2>
          <p className="text-[#bae6fd]/70 mt-2 text-sm">Join the StoryVault community</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-[#bae6fd] mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 bg-[#061e29] border border-[#06b6d4]/30 rounded-lg text-white outline-none focus:border-[#06b6d4]"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{String(errors.name.message)}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#bae6fd] mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 bg-[#061e29] border border-[#06b6d4]/30 rounded-lg text-white outline-none focus:border-[#06b6d4]"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{String(errors.email.message)}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-[#bae6fd] mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: 6 })}
              className="w-full px-4 py-2 bg-[#061e29] border border-[#06b6d4]/30 rounded-lg text-white outline-none focus:border-[#06b6d4]"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">Min 6 characters required</p>}
          </div>

          <button type="submit" className="w-full bg-[#06b6d4] hover:bg-[#22d3ee] text-[#083344] font-bold py-2 px-4 rounded-lg transition-all">
            Register
          </button>
        </form>

        {/* Google Sign In */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#06b6d4]/20"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-[#083344] text-[#bae6fd]/60">Or</span></div>
          </div>
          <button
            onClick={googleSignIn}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-[#061e29] border border-[#06b6d4]/30 text-[#bae6fd] py-2 px-4 rounded-lg hover:bg-[#06b6d4]/10 transition-all"
          >
            {/* Google SVG Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /></svg>
            Sign up with Google
          </button>
        </div>

        <p className="text-center text-sm text-[#bae6fd]/60 mt-8 border-t border-[#06b6d4]/20 pt-6">
          Already have an account?{" "} 
          <Link href="/authentication/signin" className="text-[#22d3ee] hover:underline font-bold">Login here</Link>
        </p>
      </div>
    </div>
  );
}