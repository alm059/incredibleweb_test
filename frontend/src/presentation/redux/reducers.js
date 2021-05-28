// import { combineReducers } from "redux";
import initialState from "./initialState.js";

export default function(state=initialState, action){
	switch(action.type){
		case "TOGGLE_NAV":
			return {
				...state,
				"navOpen": !state["navOpen"],
			}
		case "TOGGLE_VIDEO":
			return {
				...state,
				"videoOpen" : !state["videoOpen"],
			}
		case "OPEN_MOVIE_DATA":
			if(state["selectedMovie"] == action.payload.movieId){
				return{
					...state,
					"selectedMovie": -1,
				}
			}
			return{
				...state,
				"selectedMovie": action.payload.movieId,
			}
		case "UPDATE_FILTERS":
			return{
				...state,
				"searchFilter": {...state["searchFilter"], [action.payload.filter]: action.payload.value},
			}
		case "TOGGLE_CINEMA_MODE":
			return{
				...state,
				"videoOpen": !state["videoOpen"],
			}
		case "QUERY_PARAMS_UPDATED":
			return{
				...state,
				"paramsNeedUpdating": false,
			}
		default: {
			return state
		}
	}
}

// export default combineReducers({toggleNav})
