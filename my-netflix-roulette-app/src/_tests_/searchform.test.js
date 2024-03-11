import React from "react";
import { render, fireEvent, act } from '@testing-library/react';
import SearchApp from "../components/SearchForm/search";

const mockOnSearch = jest.fn(); 

test('calls the "onSearch" prop with proper value after clicking Submit button', () => {
  const { getByRole, getByText } = render(<SearchApp onSearch={mockOnSearch} />);
  const input = getByRole('textbox');
  const submitButton = getByText('Search');

  fireEvent.change(input, { target: { value: 'Search Query' } });
  fireEvent.click(submitButton);

  expect(mockOnSearch).toHaveBeenCalledTimes(1);
});