import { Author } from '../types';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Alex Mercer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    bio: 'Alex is a travel writer and photographer with a passion for exploring ancient ruins and historical sites. With over 10 years of experience traversing the globe, he specializes in immersive cultural experiences and off-the-beaten-path destinations.',
    occupation: 'Travel Writer & Photographer',
    social: {
      twitter: 'alexmercer',
      instagram: 'alex.mercer.travels',
      website: 'alexmercertravels.com'
    }
  },
  {
    id: '2',
    name: 'Sophia Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    bio: 'Sophia is an award-winning photographer specializing in landscape and travel photography. Her work has been featured in National Geographic, Condé Nast Traveler, and various photography exhibitions around the world.',
    occupation: 'Professional Photographer',
    social: {
      twitter: 'sophiachenphotos',
      instagram: 'sophiachen.photography',
      website: 'sophiachenphotography.com'
    }
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Marcus is a culinary explorer and food anthropologist who studies the intersection of cuisine, culture, and history. He has written three books on regional cooking traditions and hosts food tours in Mediterranean countries.',
    occupation: 'Food Writer & Culinary Expert',
    social: {
      twitter: 'mjohnson_food',
      instagram: 'marcusjohnsonfood',
      website: 'cuisineculture.com'
    }
  }
];