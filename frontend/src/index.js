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
			navbarOpen: false,
			videoOpen: false,
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
	toggleNav(){
		if(this.state.navbarOpen){
			this.setState({navbarOpen: false});
		}else{
			this.setState({navbarOpen: true});
		}
	}
	toggleVideo(){
		if(this.state.videoOpen){
			this.setState({videoOpen: false});
		}else{
			this.setState({videoOpen: true});
		}
	}
	render(){
		var panelLocation = "0";
		var toggleButtonLocation = "90%";
		var button = "<";
		var watchVideo = "none";

		if(!this.state.navbarOpen){
			panelLocation = "-100%";
			toggleButtonLocation = "105%";
			button = ">";
			if(this.state.videoOpen){
				watchVideo = "block";
			}
		}
		return (
			<div id="container">
			<Router>
				<div id={styles.search_panel}>
					<SearchBar onKeyDown={filters => this.updateSearch(filters)} />
				</div>
			    <nav id={styles.toggable_panel} style={{left: panelLocation}}>
					<div id={styles.toggle_panel_button} onClick={() => this.toggleNav()} style={{left: toggleButtonLocation}}>{button}</div>
					<ul>
						<li><Link onClick={() => this.toggleNav()} to="/" class="link">Main menu</Link></li>
						<li><Link onClick={() => this.toggleNav()} to="/about" class="link">About us</Link></li>
					</ul>
				</nav>
			    <div id={styles.main_panel}>
					<Switch>
						<Route path="/about">
						About us!
						</Route>
						<Route path="/">
							<Movies onWatchVideo={() => this.toggleVideo()} onClick={id => this.openMovieData(id)} selectedMovie={this.state.selectedMovie} searchFilter={this.state.searchFilter} />
							<div id={styles.watch_panel} style={{display: watchVideo}} onClick={() => this.toggleVideo()}>
								<video width="320" height="240" controls>
									<source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
									<source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
									Your browser does not support the video tag.
								</video>
							</div>
						</Route>
					</Switch>
				</div>
			</Router>
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
