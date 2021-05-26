import React from 'react';
import ReactDOM from 'react-dom';
import styles from './filters.module.css';

class Filter extends React.Component{
	constructor(props){
		super(props);
	}
	updateSearch(targetFilter, value){
		var test = {};
		test[targetFilter] = value;
		this.props.onKeyDown(test)
	}
	render(){
		return (
			<div>
			<input placeholder="Search by title..." onKeyUp={(event) => this.updateSearch("title", event.target.value)} /><br /><br />
			<input placeholder="Search by category..." onKeyUp={(event) => this.updateSearch("category", event.target.value)} />
			<input placeholder="Search by year..." onKeyUp={(event) => this.updateSearch("year", event.target.value)} />
			<input placeholder="Search by rating..." onKeyUp={(event) => this.updateSearch("rating", event.target.value)} />
			</div>
		);
	}
}

function Icons(){
	return (<div class=""></div>);
}

export function SearchBar(props){
	return (<Filter onKeyDown={props.onKeyDown} />);
}

// export default { SearchBar };
