import React from 'react';
import ReactDOM from 'react-dom';
import { Movies } from './presentation/movies.js'
import { SearchBar } from './presentation/filters.js'
import styles from './index.module.css';

class Page extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedMovie: -1,
			searchFilter: {
				title: "",
				category: "",
				rating: "",
				year: "",
			},
		};
	}
	openMovieData(id){
		this.setState({selectedMovie: id});
	}
	updateSearch(filters){
		console.log(filters);
		var newFilter = this.state.searchFilter;
		for(var key in filters){
			newFilter[key] = filters[key];
		}
		this.setState({searchFilter: newFilter});
	}
	render(){
		return (
			<div id="container">
				<div id={styles.search_panel}>
					<SearchBar onKeyDown={filters => this.updateSearch(filters)} />
				</div>
			    <nav id={styles.toggable_panel}></nav>
			    <div id={styles.main_panel}>
					<Movies onClick={id => this.openMovieData(id)} selectedMovie={this.state.selectedMovie} searchFilter={this.state.searchFilter} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
