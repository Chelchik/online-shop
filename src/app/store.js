import { combineReducers, createStore } from "redux";
import { likedReducer } from "../features/likedSlice";

const store = createStore(combineReducers({
    liked: likedReducer,
}))

export default store;