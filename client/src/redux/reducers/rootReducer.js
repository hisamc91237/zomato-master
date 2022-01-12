import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer";
import image from "./image/image.reducer";
import review from "./review/review.reducer";
import user from "./user/user.reducer";
import food from "./food/food.reducer";
import auth from "./auth/auth.reducer";

const rootReducer = combineReducers({
  restaurant,
  image,
  review,
  user,
  food,
  auth,
});

export default rootReducer;
