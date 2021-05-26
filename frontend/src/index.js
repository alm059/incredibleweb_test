import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
		if (this.state.selectedMovie != id){
			this.setState({selectedMovie: id});
		}else{
			this.setState({selectedMovie: -1});
		}
	}
	updateSearch(filters){
		// console.log(filters);
		var newFilter = this.state.searchFilter;
		for(var key in filters){
			newFilter[key] = filters[key];
		}
		this.setState({searchFilter: newFilter});
	}
	render(){
		return (
			<div id="container">
			<Router>
				<div id={styles.search_panel}>
					<SearchBar onKeyDown={filters => this.updateSearch(filters)} />
				</div>
			    <nav id={styles.toggable_panel}>
					<ul>
						<li><Link to ="/about">About us</Link></li>
					</ul>
				</nav>
			    <div id={styles.main_panel}>
					<Switch>
						<Route path="/about">
						About us!
						</Route>
						<Route path="/">
							<Movies onClick={id => this.openMovieData(id)} selectedMovie={this.state.selectedMovie} searchFilter={this.state.searchFilter} />
						</Route>
					</Switch>
				</div>
			</Router>
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
