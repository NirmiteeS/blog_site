export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  occupation: string;
  social: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: number;
  authorId: string;
  categories: string[];
  featured?: boolean;
  relatedPosts?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}