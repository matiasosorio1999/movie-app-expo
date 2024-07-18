import { Colors } from '@/constants/Colors';
import React, { useState, useEffect, memo } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


interface SearchBarProps {
  onSearch: (searchTerm: string, year: string) => void;
  initialSearch?: string;
  initialYear?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialSearch = '', initialYear = '' }) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [year, setYear] = useState<string>(initialYear);

  useEffect(() => {
    setSearchTerm(initialSearch);
    setYear(initialYear);
  }, [initialSearch, initialYear]);

  const handleSearch = () => {
    onSearch(searchTerm, year);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by title"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.input}
      />
      <TextInput
        placeholder="Year"
        value={year}
        onChangeText={setYear}
        style={styles.input}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: Colors.dark.tint,
  },
});

export default memo(SearchBar);
