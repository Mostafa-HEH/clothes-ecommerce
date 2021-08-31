import { userActionTyps } from "./user.typs";

export const setCurrentUser = (user) => ({
  type: userActionTyps.SET_CURRENT_USER,
  payload: user,
});
