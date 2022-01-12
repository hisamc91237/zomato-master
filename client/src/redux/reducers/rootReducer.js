import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer";
import image from "./image/image.reducer";

const rootReducer = combineReducers({ restaurant, image });

export default rootReducer;
