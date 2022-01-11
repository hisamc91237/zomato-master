import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer";

const rootReducer = combineReducers({ restaurant });

export default rootReducer;
