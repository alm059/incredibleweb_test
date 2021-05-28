import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import store from "./presentation/redux/store.js";
import reducer from "./presentation/redux/reducers.js"
import state from "./presentation/redux/initialState.js"

import { Provider } from "react-redux";

import { Main, About } from "./pages.js"

import styles from './index.module.css';



function App(props){
	var panelLocation = "0";
	var toggleButtonLocation = "90%";
	var button = "<";

	if(!store.getState()["navOpen"]){
		panelLocation = "-100%";
		toggleButtonLocation = "105%";
		button = ">";
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
				<Route path="/about" render={() => (<About />)} />
				<Route path="/" component={Main} />
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
