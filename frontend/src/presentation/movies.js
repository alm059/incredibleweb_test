import React from 'react';
import ReactDOM from 'react-dom';
import styles from './movies.module.css';

export class Movie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Harry Potter",
			image: "logo512.png",
			year: 0,
			category: "No category",
			rating: "No rating",
			dataOpen: false,
		};
	}
	static getDerivedStateFromProps(props, state){
		return {year: props.year}
	}
	displayData = () => {
		if(this.state.dataOpen){
			this.setState({dataOpen: false});
		}else{
			this.setState({dataOpen: true});
		}
	}
	openMovie = () => {

	}
	render(){
		const movieBoxStyle = (this.state.dataOpen ? {boxShadow: "0px 4px 8px 0px inset #282828",}:{boxShadow: "3px 3px 5px 6px #282828"});
		const movieBoxDataStyle = (this.state.dataOpen ? {display: "block"}:{display: "none"});

		return (<div class={styles.movie_box} style={movieBoxStyle} onClick={this.displayData}>
					<img src={this.state.image} />
					<div class={styles.movie_box_title}>{this.state.title}</div>
					<div class={styles.movie_box_data} style={movieBoxDataStyle}>
						Year: {this.state.year}<br />
						Category: {this.state.category}<br />
						Rating: {this.state.rating}<br />
						<span onClick={this.openMovie}>Watch now</span>
					</div>
				</div>);
	}
}

// function ProcessMovies(){
	// Load movies from data layer
// 	return ()
// }
