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
		};
	}
	openMovieData(id){
		this.setState({selectedMovie: id});
	}
	render(){
		return (
			<div id="container">
				<div id={styles.search_panel}>
					<SearchBar />
				</div>
			    <nav id={styles.toggable_panel}></nav>
			    <div id={styles.main_panel}>
					<Movies onClick={id => this.openMovieData(id)} selectedMovie={this.state.selectedMovie} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
