import { useCallback, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, View } from 'react-native';

import SearchBar from '@/components/SearchBar';
import { Movie } from '@/types/movies';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { MovieDetailsScreenNavigationProp } from '@/types/navigation';


export default function SearchScreen() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<MovieDetailsScreenNavigationProp>();

  const handleSearch = useCallback(async (term: string, year: string) => {
    try {
      setError(null);
      const movies = await fetchMovies(term, year);
      setMovies(movies);
    } catch (err) {
      console.log(err)
      setError('Failed to fetch movies. Please try again later.');
    }
  }, []);

  const handleCard = (movieId: string) => {
    navigation.navigate('movie/details', { id: movieId });
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>
        Movie App
      </Text>
      <SearchBar onSearch={handleSearch} />
      {error && <Text style={styles.error}>{error}</Text>}
      {!error && !movies && (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome to Movie App!</Text>
          <Text style={styles.welcome}>Use the search bar to find your favorite movies.</Text>
        </View>
      )}
      {movies &&
        <FlatList
          data={movies}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <MovieCard movie={item} onPress={handleCard}/>
          )}
          keyExtractor={(item) => item.imdbID} />
      }
      {(movies?.length === 0) && 
        <Text style={styles.welcome}>Could not find any movies. Try a different title.</Text>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.dark.text,
    fontSize: 32,
    textAlign: 'center',
    padding: 8,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  welcomeContainer: {
    borderBlockColor: 'red',
    paddingTop: 170,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  welcome: {
    color: Colors.dark.text,
    fontSize: 20,
  },
  listContainer: {
    paddingBottom: 130, 
  },
});
