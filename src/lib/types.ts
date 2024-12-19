// types/index.ts
export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  techStack: {
    name: string;
    url: string;
  }[];
  // details: string;
}
