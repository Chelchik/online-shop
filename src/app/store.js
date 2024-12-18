import { combineReducers, createStore } from "redux";
import { likedReducer } from "../features/likedSlice";
import { filterReducer } from "../features/FilterSlice";

const store = createStore(combineReducers({
    liked: likedReducer,
    filter: filterReducer
}))

export default store;