import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Taskboard from "./components/Taskboard/Taskboard";
import TaskProvider from "./contexts/TaskContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
	return (
		<TaskProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<PrivateRoute path="/taskboard">
						<Taskboard />
					</PrivateRoute>
				</Switch>
			</Router>
		</TaskProvider>
	);
};

export default App;
