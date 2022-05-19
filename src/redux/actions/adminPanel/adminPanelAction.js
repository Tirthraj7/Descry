import { SET_ADMIN_STATUS } from "../types/types";

export const setadminPanelStatus = (value) => {
  return {
    type: SET_ADMIN_STATUS,
    payload: { data: value },
  };
};
