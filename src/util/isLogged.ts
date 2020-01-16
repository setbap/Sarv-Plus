import store from "../store";
import jwtDecode from "jwt-decode";
import {OUT_USER} from "../actions/action_types";
import {useCookies} from "react-cookie"

export const useLoggend = () => {
    const [cookies,] = useCookies(["jwtToken"]);
    if (typeof cookies.jwtToken === "undefined" || cookies.jwtToken === "") {
        return false;
    }

    const user: any = jwtDecode(cookies.jwtToken);
    const exp = Date.now() / 1000;
    if (exp > user.exp) {
        store.dispatch({type: OUT_USER});
        return false;
    }
    return true;
};

