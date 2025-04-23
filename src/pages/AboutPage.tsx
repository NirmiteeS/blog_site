import React from 'react';
import { Link } from 'react-router-dom';
import { authors } from '../data/authors';
import NewsletterSignup from '../components/NewsletterSignup';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg"
          alt="Travel photography equipment on a map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Wanderlust</h1>
            <p className="text-xl md:text-2xl">Inspiring adventures through storytelling</p>
          </div>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-dark-600 dark:text-light-600 mb-8">
            At Wanderlust, we believe that travel has the power to transform lives, broaden perspectives, and create lasting connections across cultures. Our mission is to inspire and empower travelers through authentic storytelling, expert photography, and practical guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-3">Inspire</h3>
              <p className="text-dark-600 dark:text-light-600">Share captivating stories and stunning photography that ignite the desire to explore.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Inform</h3>
              <p className="text-dark-600 dark:text-light-600">Provide expert advice and practical tips to help travelers make informed decisions.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-dark-600 dark:text-light-600">Build a community of passionate travelers who share experiences and insights.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-light-800 dark:bg-dark-800 py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map(author => (
              <div key={author.id} className="card p-6 text-center">
                <img 
                  src={author.avatar} 
                  alt={author.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{author.occupation}</p>
                <p className="text-dark-600 dark:text-light-600 mb-4">{author.bio}</p>
                <Link 
                  to={`/author/${author.id}`}
                  className="btn btn-outline"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-dark-600 dark:text-light-600">
                We believe in sharing genuine travel experiences, including both the highlights and challenges. Our stories reflect the real essence of destinations and cultures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-dark-600 dark:text-light-600">
                We promote responsible travel practices that respect local communities and environments, ensuring destinations can be enjoyed by future generations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Cultural Respect</h3>
              <p className="text-dark-600 dark:text-light-600">
                We approach every destination and culture with respect, seeking to understand and share diverse perspectives and traditions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Quality Content</h3>
              <p className="text-dark-600 dark:text-light-600">
                We maintain high standards in our photography and writing, providing valuable insights and inspiring visuals that transport our readers.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="container-custom pb-16">
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default AboutPage;