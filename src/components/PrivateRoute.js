import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { TaskContext } from "../contexts/TaskContext";

const PrivateRoute = ({ children, ...rest }) => {
	let { user } = useContext(TaskContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.isSigned ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
