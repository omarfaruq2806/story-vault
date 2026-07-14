"use client";

import { useForm } from "react-hook-form";
import { ItemFormData } from "@/types/addStory";
import { addStory } from "@/services/storyServices";
import { authClient } from "@/lib/auth-client";

export default function AddStory() {
  const { register, handleSubmit } = useForm<ItemFormData>();
  
  const { data: session, isPending } = authClient.useSession();
  const userId = session?.user?.id as string;

  if(!userId) return <p>Not logged in . please login to add a story</p>;
  if (isPending) {
    return <p>Loading...</p>;
  }

  const onSubmit = async (data: ItemFormData) => {
    const newStory = { ...data, userId };
    const response = await addStory(newStory);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
      <input {...register("title")} placeholder="Title" required className="w-full border p-2" />
      <input {...register("shortDescription")} placeholder="Short Description" required className="w-full border p-2" />
      <textarea {...register("fullDescription")} placeholder="Full Description" required className="w-full border p-2" />
      <input type="number" {...register("price")} placeholder="Price" required className="w-full border p-2" />
      <select {...register("priority")} className="w-full border p-2">
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
      <select {...register("category", { required: true })} className="w-full border p-2">
    <option value="">Select Category</option>
    <option value="fiction">Fiction</option>
    <option value="non-fiction">Non-Fiction</option>
    <option value="mystery">Mystery</option>
    <option value="sci-fi">Sci-Fi</option>
    <option value="biography">Biography</option>
    </select>
      <input {...register("imageUrl")} placeholder="Image URL (Optional)" className="w-full border p-2" />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2">Submit</button>
    </form>
  );
}