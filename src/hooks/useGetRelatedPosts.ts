import { posts } from '../data/posts';
import { Post } from '../types';

export const useGetRelatedPosts = (
  currentPostId: string,
  relatedIds?: string[]
): Post[] => {
  if (relatedIds && relatedIds.length > 0) {
    // Return posts based on specified related IDs
    return posts
      .filter(post => relatedIds.includes(post.id) && post.id !== currentPostId)
      .slice(0, 3);
  }
  
  // Fallback: find posts with matching categories
  const currentPost = posts.find(post => post.id === currentPostId);
  
  if (!currentPost) {
    return [];
  }
  
  // Get posts that share categories with the current post
  return posts
    .filter(post => 
      post.id !== currentPostId && 
      post.categories.some(category => 
        currentPost.categories.includes(category)
      )
    )
    .sort(() => 0.5 - Math.random()) // Simple randomization
    .slice(0, 3);
};