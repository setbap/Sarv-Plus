import React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import History from "./util/create_history";
import SignUp from "./components/pages/user/signup";
import Login from "./components/pages/user/login";
import Info from "./components/pages/user/info";
import ValidateUser from "./components/pages/user/validate_user";
import ForgetPassword from "./components/pages/user/forget_password";
import Index from "./components/pages/index/index";
import Tours from "./components/pages/tours/index";
import Tour from "./components/pages/tour/index";
import Search from "./components/pages/search/index";
import SearchResault from "./components/pages/search/resualt/index";
import MapSearch from "./components/pages/map_search/index";
import MapSearchResault from "./components/pages/map_search/resualt/index";
import Orgs from "./components/pages/orgs/index";
import Org from "./components/pages/org/index";
import ForgetPasswordNewPassword from "./components/pages/user/set_new_forget_password";
import HeaderBar from "./components/layouts/HeaderBar";
import "./util/axios_config";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import {
    Fsignup,
    Flogin_user,
    Fvalidate_user,
    Freset_password_user,
    Fset_new_reset_password_user,
    Findex,
    Ftours,
    Forgs,
    Ftours_page,
    Forgs_page, FsearchIndex, FsearchResault, FmapSearchIndex, FmapSearchResault, Finfo_user, Forg_page, Ftour_page,
} from "./util/page_urls";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {LOGIN} from "./actions/action_types";
import {setTokenToHeader} from "./util/axios_config";

const App: React.FC = () => {
    const [cookies,] = useCookies(["jwtToken"]);
    setTokenToHeader(cookies.jwtToken ? cookies.jwtToken : "");

    return (
        <>
            <Router history={History}>
                <Switch>
                    <HeaderBar/>
                </Switch>
                <Switch>
                    <Redirect exact from={Ftours} to={Ftours + "/1"}/>
                    <Redirect exact from={Forgs} to={Forgs + "/1"}/>
                    <Route path={Ftours_page} exact component={Tours}/>
                    <Route path={Ftour_page} exact component={Tour}/>
                    <Route path={Forgs_page} exact component={Orgs}/>
                    <Route path={Forg_page} exact component={Org}/>
                    <Route path={Findex} exact component={Index}/>
                    <Route path={FsearchIndex} exact component={Search}/>
                    <Route path={FsearchResault} exact component={SearchResault}/>
                    <Route path={FmapSearchIndex} exact component={MapSearch}/>
                    <Route path={FmapSearchResault} exact component={MapSearchResault}/>
                    <Route path={Fsignup} exact component={SignUp}/>
                    <Route path={Flogin_user} exact component={Login}/>
                    <Route path={Finfo_user} exact component={Info}/>
                    <Route
                        path={Fvalidate_user}
                        exact
                        component={ValidateUser}
                    />
                    <Route
                        exact
                        path={Freset_password_user}
                        component={ForgetPassword}
                    />
                    <Route
                        exact
                        path={Fset_new_reset_password_user}
                        component={ForgetPasswordNewPassword}
                    />
                </Switch>
                <ToastContainer position="top-right" autoClose={1000}/>
            </Router>
        </>
    );
};

export default App;
