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
			id: -1,
		};
	}
	static getDerivedStateFromProps(props, state){
		return {id: props.id, title: props.title, year: props.year, image: props.id+".png", category: props.category, rating: props.rating};
	}
	openMovie = () => {

	}
	render(){
		const movieBoxStyle = (this.props.dataOpen ? {boxShadow: "0px 4px 8px 0px inset #282828",}:{boxShadow: "3px 3px 5px 6px #282828"});
		const movieBoxDataStyle = (this.props.dataOpen ? {display: "block"}:{display: "none"});

		return (<div class={styles.movie_box} style={movieBoxStyle} onClick={this.props.onClick}>
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

export function Movies(props){
	// Load movies from data layer
	var moviesJSON = GetMovieData();
	const movies = [];
	// Sort from highest to lowest in ratings
	let sorted = false;
	while(!sorted) {
		sorted = true;
		for(var i=1;i<Object.keys(moviesJSON).length;i++) {
			if(moviesJSON[i].rating > moviesJSON[i-1].rating) {
				let temp = moviesJSON[i];
				moviesJSON[i] = moviesJSON[i-1];
				moviesJSON[i-1] = temp;
				sorted = false;
			}
		}
	}
	for (const key in moviesJSON){
		let dataOpen = false;
		if(moviesJSON[key].id == props.selectedMovie){
			dataOpen = true;
		}
		movies.push(<Movie onClick={() => props.onClick(moviesJSON[key].id)} dataOpen={dataOpen} title={moviesJSON[key].title} year={moviesJSON[key].year} id={moviesJSON[key].id} category={moviesJSON[key].category} rating={moviesJSON[key].rating} />);
	}
	return (
		<div>
		{movies}
		</div>
	);

}
