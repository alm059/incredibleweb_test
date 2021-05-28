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
					"paramsNeedUpdating": true,
				}
			}
			return{
				...state,
				"selectedMovie": action.payload.movieId,
				"paramsNeedUpdating": true,
			}
		case "UPDATE_FILTERS":
			return{
				...state,
				"searchFilter": {...state["searchFilter"], [action.payload.filter]: action.payload.value},
				"paramsNeedUpdating": true,
			}
		case "TOGGLE_CINEMA_MODE":
			return{
				...state,
				"videoOpen": !state["videoOpen"],
			}
		case "PARAMS_NO_LONGER_NEED_UPDATING":
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
