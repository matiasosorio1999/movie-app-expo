import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  'index': undefined;
  'movie/details': { id: string };
};

export type MovieDetailsScreenRouteProp = RouteProp<RootStackParamList, 'movie/details'>;

export type MovieDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'movie/details'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'index'>;
