import React from "react";
import { Router, Route } from "react-router-dom";
import History from "./util/create_history";
import SignUp from "./components/pages/user/signup";
import Login from "./components/pages/user/login";
import ValidateUser from "./components/pages/user/validate_user";
import ForgetPassword from "./components/pages/user/forget_password";
import ForgetPasswordNewPassword from "./components/pages/user/set_new_forget_password";

import "./App.css";
import {
	Fsignup,
	Flogin_user,
	Fvalidate_user,
	Freset_password_user,
	Fset_new_reset_password_user,
} from "./util/page_urls";

const App: React.FC = () => {
	return (
		<Router history={History}>
			<Route path={Fsignup} component={SignUp} />
			<Route path={Flogin_user} component={Login} />
			<Route path={Fvalidate_user} component={ValidateUser} />
			<Route path={Freset_password_user} component={ForgetPassword} />
			<Route
				path={Fset_new_reset_password_user}
				component={ForgetPasswordNewPassword}
			/>
		</Router>
	);
};

export default App;
