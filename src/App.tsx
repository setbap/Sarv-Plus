import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import History from "./util/create_history";
import SignUp from "./components/pages/user/signup";
import Login from "./components/pages/user/login";
import ValidateUser from "./components/pages/user/validate_user";
import ForgetPassword from "./components/pages/user/forget_password";
import Index from "./components/pages/index/index";
import Tours from "./components/pages/tours/index";
import Orgs from "./components/pages/orgs/index";
import ForgetPasswordNewPassword from "./components/pages/user/set_new_forget_password";
import HeaderBar from "./components/layouts/HeaderBar";
import "./util/axios_config";
import { ToastContainer } from "react-toastify";
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
	Forgs_page,
} from "./util/page_urls";

const App: React.FC = () => {
	return (
		<>
			<Router history={History}>
				<Switch>
					<HeaderBar />
				</Switch>
				<Switch>
					<Redirect exact from={Ftours} to={Ftours + "/1"} />
					<Redirect exact from={Forgs} to={Forgs + "/1"} />
					<Route path={Ftours_page} exact component={Tours} />
					<Route path={Forgs_page} exact component={Orgs} />
					<Route path={Findex} exact component={Index} />
					<Route path={Fsignup} exact component={SignUp} />
					<Route path={Flogin_user} exact component={Login} />
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
					<ToastContainer autoClose={1000} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
