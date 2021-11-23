import { combineReducers } from "redux-immutable";
import { detailReducer } from "../components/detail/store";
import { headerReducer } from "../components/header/store";
import { homeReducer } from "../components/home/store";
import { loginReducer } from "../components/login/store";


const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login:loginReducer,
});
export default reducer;
