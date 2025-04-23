import { authors } from '../data/authors';
import { Author } from '../types';

export const useGetAuthor = (authorId: string): Author | undefined => {
  return authors.find(author => author.id === authorId);
};