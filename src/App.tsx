import React from "react";
import { Router, Route } from "react-router-dom";
import History from "./util/create_history";
import SignUp from "./components/pages/signup";
import "./App.css";

const App: React.FC = () => {
	return (
		<Router history={History}>
			<Route path={""} component={SignUp} />
		</Router>
	);
};

export default App;
