import React from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import NewsletterSignup from '../components/NewsletterSignup';

const HomePage: React.FC = () => {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Get featured posts
  const featuredPosts = sortedPosts.filter(post => post.featured);
  
  // Get regular posts (excluding featured ones)
  const regularPosts = sortedPosts.filter(post => !post.featured);
  
  return (
    <div className="animate-fade-in">
      <section className="py-6 md:py-12">
        <div className="container-custom">
          {/* Featured Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {featuredPosts.slice(0, 2).map(post => (
              <PostCard key={post.id} post={post} featured={true} />
            ))}
          </div>
          
          {/* Latest Posts */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regularPosts.slice(0, 9).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="my-12">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;