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
	shareQueryParamsLink(){
		var copyText = "localhost:3000/?";
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
		navigator.clipboard.writeText(copyText);
	}
	render(){
		return (
			<div>
				<input name="title" defaultValue={this.props.store.getState()["searchFilter"]["title"]} placeholder="Search by title..." onChange={(event) => this.handleChange(event)} /><br /><br />
				<input name="category" defaultValue={this.props.store.getState()["searchFilter"]["category"]} placeholder="Search by category..." onChange={(event) => this.handleChange(event)} />
				<input name="year" defaultValue={this.props.store.getState()["searchFilter"]["year"]} placeholder="Search by year..." onChange={(event) => this.handleChange(event)} />
				<input name="rating" defaultValue={this.props.store.getState()["searchFilter"]["rating"]} placeholder="Search by rating..." onChange={(event) => this.handleChange(event)} />
				<span id={styles.share} onClick={() => this.shareQueryParamsLink()}>Copy/<br />Share</span>
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
