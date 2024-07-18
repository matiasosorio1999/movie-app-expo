import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';
import { HomeScreenNavigationProp } from '@/types/navigation';

const NotFoundScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleGoHome = () => {
    navigation.navigate('index');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Not Found</Text>
      <Text style={styles.message}>The page you are looking for does not exist.</Text>
      <Button title="Go Home" onPress={handleGoHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
});

export default NotFoundScreen;
