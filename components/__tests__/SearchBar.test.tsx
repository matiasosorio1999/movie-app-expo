import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  it('renders correctly with initial values', () => {
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={jest.fn()} initialSearch="Harry" initialYear="2010" />
    );

    expect(getByPlaceholderText('Search by title').props.value).toBe('Harry');
    expect(getByPlaceholderText('Year').props.value).toBe('2010');
  });

  it('calls onSearch with the correct values', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={onSearchMock} />);

    fireEvent.changeText(getByPlaceholderText('Search by title'), 'Matrix');
    fireEvent.changeText(getByPlaceholderText('Year'), '1999');
    fireEvent.press(getByText('Search'));

    expect(onSearchMock).toHaveBeenCalledWith('Matrix', '1999');
  });

  it('handles empty search values', () => {
    const onSearchMock = jest.fn();
    const { getByText } = render(<SearchBar onSearch={onSearchMock} />);

    fireEvent.press(getByText('Search'));

    expect(onSearchMock).toHaveBeenCalledWith('', '');
  });
});
