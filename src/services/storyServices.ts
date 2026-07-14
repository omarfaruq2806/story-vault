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
export const getStories = async (
  search = '', 
  category = '', 
  latest = false, 
  page = 1, 
  limit = 10, 
  priceSort = ''
) => {
  const response = await fetch(
    `${BASE_URL}/api/stories?search=${search}&category=${category}&latest=${latest}&page=${page}&limit=${limit}&priceSort=${priceSort}`
  );
  return response.json();
};
// get a single story
export const getStory = async (id: string) => {
  const response = await fetch(`${BASE_URL}/api/stories/${id}`);
  return response.json();
};

// update a story
export const updateStory = async (id: string, data: ItemFormData) => {
  const response = await fetch(`${BASE_URL}/api/stories/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};
