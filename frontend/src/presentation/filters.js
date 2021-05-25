import React from 'react';
import ReactDOM from 'react-dom';
import styles from './filters.module.css';

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

export function SearchBar(){
	return (<Filter />);
}

// export default { SearchBar };
