import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '../types';
import { formatDate } from '../utils/formatters';
import { useGetAuthor } from '../hooks/useGetAuthor';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  const author = useGetAuthor(post.authorId);
  
  if (featured) {
    return (
      <article className="card group animate-fade-in h-full">
        <Link to={`/post/${post.slug}`} className="block h-full">
          <div className="relative h-96 overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 font-sans">{post.title}</h2>
              <p className="text-light-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{post.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }
  
  return (
    <article className="card group h-full animate-fade-in transition-all duration-300">
      <Link to={`/post/${post.slug}`} className="block h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 font-sans group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-dark-600 dark:text-light-600 mb-3 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-dark-600 dark:text-light-600">
            <div className="flex items-center">
              {author && (
                <>
                  <img 
                    src={author.avatar} 
                    alt={author.name} 
                    className="w-6 h-6 rounded-full mr-2 object-cover"
                  />
                  <span>{author.name}</span>
                </>
              )}
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;