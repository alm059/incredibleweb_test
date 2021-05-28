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
		return {id: props.movieData.id, title: props.movieData.title, year: props.movieData.year, image: "./thumbnails/"+props.movieData.id+".jpg", category: props.movieData.category, rating: props.movieData.rating};
	}
	checkFilter(styles, searchFilter){
		if(!this.state.title.toLowerCase().includes(searchFilter["title"].toLowerCase()) ||
			!this.state.category.toLowerCase().includes(searchFilter["category"].toLowerCase()) ||
			!this.state.rating.toString().includes(searchFilter["rating"]) ||
			!this.state.year.toString().includes(searchFilter["year"])){
			return {display:"none",};
		}
		return styles
	}
	handleClick(){
		this.props.store.dispatch({type: "OPEN_MOVIE_DATA", payload: {"movieId": this.state.id}})
		var copyText = "/?";
		if(this.props.store.getState()["selectedMovie"] != -1)
			copyText += "selectedMovie=" + this.props.store.getState()["selectedMovie"] + "&";
		if(this.props.store.getState()["searchFilter"]["title"] != "")
			copyText += "titleFilter=" + this.props.store.getState()["searchFilter"]["title"] + "&";
		if(this.props.store.getState()["searchFilter"]["category"] != "")
			copyText += "categoryFilter=" + this.props.store.getState()["searchFilter"]["category"] + "&";
		if(this.props.store.getState()["searchFilter"]["year"] != "")
			copyText += "yearFilter=" + this.props.store.getState()["searchFilter"]["year"] + "&";
		if(this.props.store.getState()["searchFilter"]["rating"] != "")
			copyText += "ratingFilter=" + this.props.store.getState()["searchFilter"]["rating"] + "&";
		window.history.replaceState(null, "React App", copyText)
	}
	render(){
		let movieBoxStyle = (this.props.store.getState()["selectedMovie"] == this.state.id ? {boxShadow: "0px 4px 8px 0px inset #282828",}:{boxShadow: "3px 3px 5px 6px #282828"});
		const movieBoxDataStyle = (this.props.store.getState()["selectedMovie"] == this.state.id ? {display: "block"}:{display: "none"});

		movieBoxStyle = this.checkFilter(movieBoxStyle, this.props.store.getState()["searchFilter"]);

		return (<div class={styles.movie_box} style={movieBoxStyle} onClick={() => this.handleClick()}>
					<img src={this.state.image} />
					<div class={styles.movie_box_title}>{this.state.title}</div>
					<div class={styles.movie_box_data} style={movieBoxDataStyle}>
						Year: {this.state.year}<br />
						Category: {this.state.category}<br />
						Rating: {this.state.rating}<br />
						<span onClick={id => this.props.store.dispatch({type: "TOGGLE_CINEMA_MODE"})}>Watch now</span>
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
	// Create an array of movie components
	for (const key in moviesJSON){
		movies.push(<Movie store={props.store} movieData={moviesJSON[key]} />);
	}
	return (
		<div>
		{movies}
		</div>
	);

}
