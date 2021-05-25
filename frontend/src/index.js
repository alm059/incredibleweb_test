import React from 'react';
import ReactDOM from 'react-dom';
import { Movies } from './presentation/movies.js'
import { SearchBar } from './presentation/filters.js'


ReactDOM.render(<SearchBar />, document.getElementById('search_panel'));
ReactDOM.render(<Movies />, document.getElementById('main_panel'));
