import React from "react"; 
import MovieForm from "../components/MovieForm";
import { action } from '@storybook/addon-actions';

export default {
    title: 'MovieForm',
    component: MovieForm
}

const Template = (args) => <MovieForm {...args} />;
export const Default = Template.bind({});

Default.args = {
    initialMovie: {},
    onSubmit: action('submit'),
  };
