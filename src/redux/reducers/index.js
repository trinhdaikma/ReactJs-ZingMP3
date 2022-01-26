import { combineReducers } from "redux";
import playListReducer from "./PlayList";

const rootReducer = combineReducers({
  playList: playListReducer,
});

export default rootReducer;
