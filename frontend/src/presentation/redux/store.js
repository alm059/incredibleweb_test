import { createStore } from "redux";
import reducer from "./reducers.js"
import state from "./initialState.js"

const store = createStore(reducer, state);

export default store;
