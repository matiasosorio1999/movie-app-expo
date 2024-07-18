import React from 'react';
import { render } from '@testing-library/react-native';
import MovieCard from '@/components/MovieCard';
import { Movie } from '@/types/movies';

const mockMovie: Movie = {
  Title: "Harry",
  Year: "2001",
  imdbID: "tt1375666",
  Type: "movie",
  Poster: "https://example.com/inception.jpg",
};

const mockOnPress = (id: string) => {};

describe('MovieCard', () => {

  it('renders correctly with movie data', () => {
    const { getByText, getByTestId } = render(<MovieCard movie={mockMovie} onPress={mockOnPress} />);
    
    expect(getByText('Harry')).toBeTruthy();
    expect(getByText('2001 movie')).toBeTruthy();
    expect(getByTestId('movie-poster').props.source).toEqual({ uri: mockMovie.Poster });
  });

  it('displays default image when poster is N/A', () => {
    const movieWithoutPoster = { ...mockMovie, Poster: 'N/A' };
    const { getByTestId } = render(<MovieCard movie={movieWithoutPoster} onPress={mockOnPress}/>);
    
      expect(getByTestId('movie-poster').props.source).toEqual(require('../../assets/images/react-logo.png'));
  });

});
