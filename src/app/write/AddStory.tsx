"use client";

import { useForm } from "react-hook-form";
import { ItemFormData } from "@/types/addStory";
import { addStory } from "@/services/storyServices";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/dist/client/components/navigation";
import { AnimatedToast } from "@/components/customToast/AnimatedToast";
import Spinner from "@/components/loading/Spinner";

export default function AddStory() {
  const { register, handleSubmit } = useForm<ItemFormData>();
  const router = useRouter();
  
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id as string;
  
  const onSubmit = async (data: ItemFormData) => {
    const newStory = { ...data, userId };
    const response = await addStory(newStory);
    if (response.error) {
      AnimatedToast("Failed to publish story.", "error");
    } else {
      AnimatedToast("Story published successfully!", "success");
      router.push("/my-stories");
    }
  };

  const inputStyle = "w-full p-3 rounded-lg border border-[#06b6d4]/20 bg-[#083344] text-white outline-none focus:border-[#06b6d4] transition-all placeholder:text-[#bae6fd]/50";

  return (
    <div className="min-h-screen bg-[#061e29] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#083344] p-8 rounded-2xl border border-[#06b6d4]/20 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Add Your Story</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <input {...register("title")} placeholder="Title" required className={inputStyle} />
            
            <input {...register("shortDescription")} placeholder="Short Description" required className={inputStyle} />
            
            <textarea {...register("fullDescription")} placeholder="Full Description" rows={4} required className={inputStyle} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="number" {...register("price")} placeholder="Price ($)" required className={inputStyle} />
              
              <select {...register("priority")} className={inputStyle}>
                <option value="low" className="bg-[#083344]">Low Priority</option>
                <option value="high" className="bg-[#083344]">High Priority</option>
              </select>
            </div>

            <select {...register("category", { required: true })} className={inputStyle}>
              <option value="" className="bg-[#083344]">Select Category</option>
              <option value="fiction" className="bg-[#083344]">Fiction</option>
              <option value="non-fiction" className="bg-[#083344]">Non-Fiction</option>
              <option value="mystery" className="bg-[#083344]">Mystery</option>
              <option value="sci-fi" className="bg-[#083344]">Sci-Fi</option>
              <option value="biography" className="bg-[#083344]">Biography</option>
            </select>
            
            <input {...register("imageUrl")} placeholder="Image URL (Optional)" className={inputStyle} />
            
            <button 
              type="submit" 
              className="w-full bg-[#06b6d4] hover:bg-[#22d3ee] text-[#083344] py-3 rounded-lg font-bold transition-all"
            >
              Submit Story
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}