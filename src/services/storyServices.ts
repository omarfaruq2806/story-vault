import { ItemFormData } from "@/types/addStory";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


// post a story
export const addStory = async (data: ItemFormData) => {
  const response = await fetch(`${BASE_URL}/api/stories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

// get my stories
export const getMyStories = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/api/stories?userId=${userId}`);
  return response.json();
};

// delete a story
export const deleteStory = async (id: string) => {
  const response = await fetch(`${BASE_URL}/api/stories/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// get all stories
export const getStories = async () => {
  const response = await fetch(`${BASE_URL}/api/stories`);
  return response.json();
};

// get a single story
export const getStory = async (id: string) => {
  const response = await fetch(`${BASE_URL}/api/stories/${id}`);
  return response.json();
};
