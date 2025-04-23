import React from 'react';
import { Link } from 'react-router-dom';
import { useGetRelatedPosts } from '../hooks/useGetRelatedPosts';

interface RelatedPostsProps {
  postId: string;
  relatedIds?: string[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ postId, relatedIds }) => {
  const relatedPosts = useGetRelatedPosts(postId, relatedIds);

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 font-sans">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article key={post.id} className="card group animate-fade-in">
            <Link to={`/post/${post.slug}`} className="block">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h4>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;