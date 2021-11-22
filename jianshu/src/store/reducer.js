import { combineReducers } from "redux-immutable";
import { detailReducer } from "../components/detail/store";
import { headerReducer } from "../components/header/store";
import { homeReducer } from "../components/home/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
});
export default reducer;
