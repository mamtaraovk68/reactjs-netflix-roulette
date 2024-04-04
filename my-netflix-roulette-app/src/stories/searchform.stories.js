import React from "react";
import {action} from '@storybook/addon-actions';
import SearchApp from "../components/SearchForm/search";

export default {
  title: 'SearchForm',
  Component: SearchApp,
};

export const Default = () => {
    <SearchApp onSearch={action('onSearch')}/>
}

export const WithInitialQuery = () => (
    <SearchApp
      initialQuery="Initial Query Value"
      onSearch={action('onSearch')}
    />
  );