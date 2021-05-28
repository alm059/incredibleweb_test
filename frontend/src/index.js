import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./presentation/redux/reducers.js"
import state from "./presentation/redux/initialState.js"

import { Movies } from './presentation/movies.js'
import { SearchBar } from './presentation/filters.js'

import styles from './index.module.css';


const store = createStore(reducer, state);

function App(props){
		var panelLocation = "0";
		var toggleButtonLocation = "90%";
		var button = "<";
		var watchVideo = "none";

		if(!store.getState()["navOpen"]){
			panelLocation = "-100%";
			toggleButtonLocation = "105%";
			button = ">";
			if(store.getState()["videoOpen"]){
				watchVideo = "block";
			}
		}
	return(
		<Router>
			<nav id={styles.toggable_panel} style={{left: panelLocation}}>
				<div id={styles.toggle_panel_button} onClick={() => store.dispatch({ type: 'TOGGLE_NAV' })} style={{left: toggleButtonLocation}}>
					{button}
				</div>
				<ul>
					<li><Link onClick={() => store.dispatch({ type: 'TOGGLE_NAV' })} to="/" class="link">Main menu</Link></li>
					<li><Link onClick={() => store.dispatch({ type: 'TOGGLE_NAV' })} to="/about" class="link">About us</Link></li>
				</ul>
			</nav>
			<Switch>
				<Route path="/about">
				About us!
				</Route>
				<Route path="/">
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
				</Route>
			</Switch>
		</Router>
	);
}


const render = () => ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

render()
store.subscribe(render)
