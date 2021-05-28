import React from 'react';
// import ReactDOM from 'react-dom';
import styles from './filters.module.css';
import query from 'query-string'

class Filter extends React.Component{
	constructor(props){
		super(props);
	}
	handleChange(event){
		this.props.store.dispatch({type: "UPDATE_FILTERS", payload: {"filter": event.target.name, "value": event.target.value}});
	}
	render(){
		return (
			<div>
				<input name="title" placeholder="Search by title..." onChange={(event) => this.handleChange(event)} /><br /><br />
				<input name="category" placeholder="Search by category..." onChange={(event) => this.handleChange(event)} />
				<input name="year" placeholder="Search by year..." onChange={(event) => this.handleChange(event)} />
				<input name="rating" placeholder="Search by rating..." onChange={(event) => this.handleChange(event)} />
			</div>
		);
	}
}

function Icons(){
	return (<div class=""></div>);
}

export function SearchBar(props){
	return (<Filter store={props.store} />);
}

// export default { SearchBar };
