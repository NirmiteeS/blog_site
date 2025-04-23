import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { posts } from '../data/posts';
import { formatDate } from '../utils/formatters';
import CategoryBadge from '../components/CategoryBadge';
import RelatedPosts from '../components/RelatedPosts';
import NotFoundPage from './NotFoundPage';
import { useGetAuthor } from '../hooks/useGetAuthor';
import NewsletterSignup from '../components/NewsletterSignup';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);
  const author = useGetAuthor(post?.authorId || '');
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Wanderlust Blog`;
    }
    
    return () => {
      document.title = 'Wanderlust | Travel Blog';
    };
  }, [post]);
  
  if (!post) {
    return <NotFoundPage />;
  }
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto -mt-20 relative z-10">
          {/* Post Header */}
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl p-6 md:p-10 mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map(category => (
                <CategoryBadge key={category} category={category} />
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            
            <p className="text-lg text-dark-600 dark:text-light-600 mb-6">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center text-sm text-dark-600 dark:text-light-600 gap-4 md:gap-6">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
              {author && (
                <Link to={`/author/${author.id}`} className="flex items-center hover:text-primary-500 transition-colors">
                  <User size={16} className="mr-2" />
                  <span>By {author.name}</span>
                </Link>
              )}
            </div>
          </div>
          
          {/* Post Content */}
          <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-10 mb-8">
            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          
          {/* Author Bio */}
          {author && (
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{author.occupation}</p>
                  <p className="text-dark-600 dark:text-light-600 mb-4">{author.bio}</p>
                  <div className="flex gap-4">
                    {author.social.twitter && (
                      <a href={`https://twitter.com/${author.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        Twitter
                      </a>
                    )}
                    {author.social.instagram && (
                      <a href={`https://instagram.com/${author.social.instagram}`} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        Instagram
                      </a>
                    )}
                    {author.social.website && (
                      <a href={`https://${author.social.website}`} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Newsletter */}
          <div className="mb-12">
            <NewsletterSignup />
          </div>
          
          {/* Related Posts */}
          <RelatedPosts postId={post.id} relatedIds={post.relatedPosts} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;