import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

class Movie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Harry Potter",
			image: "",
			year: 0,
			category: "",
		};
	}
	static getDerivedStateFromProps(props, state){
		return {year: props.year}
	}
	displayData = () => {

	}
	render(){
		return (<div class={styles.movie_box} onClick={this.displayData}>
				<img src={this.state.image} />
				<div class={styles.movie_box_title}>{this.state.title}</div>
				<div class={styles.movie_box_data}></div>
			</div>);
	}
}

// function ProcessMovies(){
	// Load movies from data layer
// 	return ()
// }

class Filter extends React.Component{
	constructor(props){
		super(props);
		this.state = ({
			placeholder: "Search..."
		});
	}
	render(){
		return (<input placeholder={this.state.placeholder} />);
	}
}

function Icons(){
	return (<div class=""></div>);
}

function SearchBar(){
	return (<Filter />);
}

ReactDOM.render(<SearchBar />, document.getElementById('search_panel'));
ReactDOM.render(<Movie year='1' />, document.getElementById('main_panel'));
