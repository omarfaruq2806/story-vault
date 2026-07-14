
export type Story = {
  _id: string; 
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  priority: string;
  imageUrl?: string;
  category: string;
};