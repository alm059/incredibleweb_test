import React from 'react';
import ReactDOM from 'react-dom';
import { Movie } from './presentation/movies.js'
import { SearchBar } from './presentation/filters.js'


ReactDOM.render(<SearchBar />, document.getElementById('search_panel'));
ReactDOM.render(<Movie year='1' />, document.getElementById('main_panel'));
