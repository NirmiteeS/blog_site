import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { authors } from '../data/authors';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import NotFoundPage from './NotFoundPage';

const AuthorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const author = authors.find(a => a.id === id);
  
  // Get posts by this author
  const authorPosts = posts.filter(post => post.authorId === id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  if (!author) {
    return <NotFoundPage />;
  }
  
  return (
    <div className="animate-fade-in">
      {/* Author Header */}
      <div className="bg-light-800 dark:bg-dark-800 py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-dark-700 shadow-md"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{author.name}</h1>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-lg mb-4">{author.occupation}</p>
                <p className="text-dark-600 dark:text-light-600 mb-6 max-w-2xl">{author.bio}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {author.social.twitter && (
                    <a 
                      href={`https://twitter.com/${author.social.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <span>@{author.social.twitter}</span>
                    </a>
                  )}
                  {author.social.instagram && (
                    <a 
                      href={`https://instagram.com/${author.social.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <span>{author.social.instagram}</span>
                    </a>
                  )}
                  {author.social.website && (
                    <a 
                      href={`https://${author.social.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <span>{author.social.website}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Author Posts */}
      <div className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Articles by {author.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {authorPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-600 dark:text-light-600">No articles found for this author.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorPage;