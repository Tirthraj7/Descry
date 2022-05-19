import { SET_ADMIN_STATUS } from "../../actions/types/types";

const initState = {
  adminPanelFlag: false, // shuold be true later on but for now keep it false
};

const designReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ADMIN_STATUS:
      // console.log("reducer", action.payload.data);
      return {
        ...state,
        adminPanelFlag: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default designReducer;
