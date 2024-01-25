import { SET_USER } from "./constants";


export const setUser = (user,cb) => ({
  type: SET_USER,
  user,
  cb
});