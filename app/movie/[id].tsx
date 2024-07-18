import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { fetchMovieDetails } from '@/services/api';
import { MovieDetails } from '@/types/movies';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');
const IMAGE_HEIGHT = height * 0.55;


const MovieDetailsScreen: React.FC = () => {
  const { id } = useLocalSearchParams();

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchMovieDetails(id as string);
        setMovie(details);
        if (details && details.Genre !== "N/A") {
          const genres = details.Genre.split(',').map((genre: string) => genre.trim());
          setGenres(genres);
        } else {
          setGenres([]);
        }
      } catch (err) {
        console.log(err);
        setError('Failed to fetch movie details. Please try again later.');
      }
    };

    fetchDetails();
  }, [id]);

  if (error) {
    return (
      <View>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!movie) {
    return (
      <View>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image source={{ uri: movie.Poster }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.Title}</Text>
        <View style={styles.genresContainer}>
          {genres && genres.map((genre: string) => {
            return <Text key={genre} style={styles.genre}>{genre}</Text>
          })}
        </View>
        <View style={styles.iconsContainer}>
          <MaterialCommunityIcons name='star' size={18} color='#facc15' solid /><Text style={styles.rating}>{movie.imdbRating}</Text>
          <MaterialCommunityIcons name='timer-sand-full' size={18} color='#92300e' solid /><Text style={styles.rating}>{movie.Runtime}</Text>
        </View>
        <Text style={styles.plot}>{movie.Plot}</Text>
        <Text style={styles.director}>Director: {movie.Director}</Text>
        <Text style={styles.actors}>Actors: {movie.Actors}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    overflow: 'hidden'
  },
  details: {
    padding: 13,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.dark.text,
    marginLeft: 4,
  },
  genresContainer: {
    marginVertical: 9,
    flexDirection: 'row',
  },
  genre: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginRight: 4,
    backgroundColor: '#334155',
    color: Colors.dark.text,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
    marginVertical: 1,
  },
  rating: {
    fontSize: 16,
    color: Colors.dark.text,
    marginLeft: 3,
    marginRight: 8,
  },
  plot: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 4,
    color: Colors.dark.text,
  },
  director: {
    fontSize: 16,
    marginVertical: 5,
    color: Colors.dark.text,
  },
  actors: {
    fontSize: 16,
    marginVertical: 5,
    color: Colors.dark.text,
  },
  error: {
    color: 'red',
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
  },
  loading: {
    padding: 15,
  }
});

export default MovieDetailsScreen;
