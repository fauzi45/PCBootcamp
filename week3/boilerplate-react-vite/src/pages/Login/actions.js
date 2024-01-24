import { DO_LOGIN } from "./constants";

export const doLoginAction = (formData) => ({
    type: DO_LOGIN,
    formData
});