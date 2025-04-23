import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import NewsletterSignup from '../components/NewsletterSignup';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Filter posts by category
  const categoryPosts = posts
    .filter(post => post.categories.includes(slug || ''))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const categoryTitle = slug?.charAt(0).toUpperCase() + slug?.slice(1);
  
  return (
    <div className="animate-fade-in">
      <div className="bg-light-800 dark:bg-dark-800 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryTitle}</h1>
          <p className="text-dark-600 dark:text-light-600 text-lg">
            Explore our latest articles about {slug}
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {categoryPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-600 dark:text-light-600">No articles found in this category.</p>
          </div>
        )}
        
        <div className="mt-12">
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;