import { Movies } from './presentation/movies.js'
import { SearchBar } from './presentation/filters.js'

import styles from './index.module.css';

import store from "./presentation/redux/store.js";
import reducer from "./presentation/redux/reducers.js"
import initialState from "./presentation/redux/initialState.js"

export function Main(props){
		// Propagate query params to store
		// THIS WILL ONLY UPDATE THE STORE THE FIRST TIME THE SITE LOADS WITH queryParams
		// For the other times the store will hold the values until shared, where an URL will be created
		if(props.location.search.length > 0 && store.getState()["paramsNeedUpdating"]){
			var queryParams = new URLSearchParams(props.location.search);
			if(queryParams.get("selectedMovie") != null && store.getState()["selectedMovie"] == initialState["selectedMovie"])
				store.dispatch({type: "OPEN_MOVIE_DATA", payload: {"movieId": parseInt(queryParams.get("selectedMovie"))}});
			if(queryParams.get("titleFilter") != null && store.getState()["searchFilter"]["title"] == initialState["searchFilter"]["title"])
				store.dispatch({type: "UPDATE_FILTERS", payload: {"filter": "title", "value": queryParams.get("titleFilter")}});
			if(queryParams.get("categoryFilter") != null && store.getState()["searchFilter"]["category"] == initialState["searchFilter"]["category"])
				store.dispatch({type: "UPDATE_FILTERS", payload: {"filter": "category", "value": queryParams.get("categoryFilter")}});
			if(queryParams.get("yearFilter") != null && store.getState()["searchFilter"]["year"] == initialState["searchFilter"]["year"])
				store.dispatch({type: "UPDATE_FILTERS", payload: {"filter": "year", "value": queryParams.get("yearFilter")}});
			if(queryParams.get("ratingFilter") != null && store.getState()["searchFilter"]["rating"] == initialState["searchFilter"]["rating"])
				store.dispatch({type: "UPDATE_FILTERS", payload: {"filter": "rating", "value": queryParams.get("ratingFilter")}});
			store.dispatch({type: "QUERY_PARAMS_UPDATED"});
		}

		var watchVideo = "none";
		if(!store.getState()["navOpen"] && store.getState()["videoOpen"]){
			watchVideo = "block";
		}
	return(
		<div class="container">
			<div id={styles.search_panel}>
				<SearchBar store={store} />
			</div>
			<div id={styles.main_panel}>
				<Movies store={store} />
			</div>
			<div id={styles.watch_panel} style={{display: watchVideo}} onClick={() => store.dispatch({ type: 'TOGGLE_CINEMA_MODE' })}>
				<video width="320" height="240" controls>
					<source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
					<source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}

export function About(props){
	return(
		<div id={styles.main_panel}>
			About us!
		</div>
	);
}
