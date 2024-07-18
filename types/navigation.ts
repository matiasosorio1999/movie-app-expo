import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  'index': undefined;
  'movie/[id]': { id: string };
};

export type MovieDetailsScreenRouteProp = RouteProp<RootStackParamList, 'movie/[id]'>;

export type MovieDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'movie/[id]'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'index'>;
