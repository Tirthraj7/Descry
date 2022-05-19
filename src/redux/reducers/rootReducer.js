// import external modules
import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import designReducer from "./design/design";

import { reducer as toastrReducer } from "react-redux-toastr";
const rootReducer = combineReducers({
  login: loginReducer,
  toastr: toastrReducer,
  design: designReducer,
});

export default rootReducer;
