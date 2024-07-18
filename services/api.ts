import axios from 'axios';
import { Movie, MovieDetails } from '@/types/movies';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = '65c17c34';

export const fetchMovies = async (searchTerm: string, year?: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: searchTerm,
        y: year,
        apikey: API_KEY
      }
    });
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching movies', error);
    throw error;
  }
};

export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        i: id,
        plot: 'full',
        apikey: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details', error);
    throw error;
  }
};
