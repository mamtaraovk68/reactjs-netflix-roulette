import React from 'react';
import MovieForm from '../components/MovieForm';


export default {
  title: 'AddMovie',
};

export const AddMovie = () => (
  <MovieForm onSubmit={(data) => console.log('Form Data:', data)} />
);