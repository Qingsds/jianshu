import { combineReducers } from "redux-immutable";
import {headerReducer} from "../components/header/store";

const reducer = combineReducers({
  header: headerReducer,
});
export default reducer;
