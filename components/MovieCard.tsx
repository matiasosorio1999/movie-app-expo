import React, { FC, memo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Movie } from '@/types/movies';
import { Colors } from '@/constants/Colors';

interface MovieCardProps {
  movie: Movie;
  onPress: (id: string) => void;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.46;

const MovieCard: FC<MovieCardProps> = ({ movie, onPress }) => {
  const posterUrl = movie.Poster !== 'N/A' ? { uri: movie.Poster } : require('@/assets/images/react-logo.png');

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onPress(movie.imdbID)}>
        <View style={styles.imageContainer}>
          <Image
            source={posterUrl}
            style={styles.image}
            resizeMode="cover"
            testID="movie-poster"
          />
        </View>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.details}>
          {movie.Year}<Text style={styles.type}> {movie.Type}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    width: CARD_WIDTH,
    marginHorizontal: 'auto',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: Colors.dark.text,
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  details: {
    color: Colors.dark.text,
    paddingHorizontal: 8,
  },
  type: {
    color: '#888',
  },
});

export default memo(MovieCard);
