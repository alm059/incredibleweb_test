import React from 'react';
import ReactDOM from 'react-dom';
import styles from './movies.module.css';
import { GetMovieData } from '../data/request.js'

class Movie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Title",
			image: "logo512.png",
			year: 0,
			category: "No category",
			rating: "No rating",
			dataOpen: false,
		};
	}
	static getDerivedStateFromProps(props, state){
		return {title: props.title, year: props.year, image: props.id+".png", category: props.category, rating: props.rating};
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

export function Movies(){
	// Load movies from data layer
	var moviesJSON = GetMovieData();
	const numbers = [1, 2, 3, 4, 5];
	const movies = [];
	// foreach ({element : moviesJSON}){
	// 	let test = <Movie title={element.title} />;
	// }
	for (const key in moviesJSON){
		movies.push(<Movie title={moviesJSON[key].title} />);
	}
	return (
		<div>
		{movies}
		</div>
	);

}
