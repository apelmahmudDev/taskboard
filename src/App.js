import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Taskboard from "./components/Taskboard/Taskboard";
import TaskProvider from "./contexts/TaskContext";

const App = () => {
	return (
		<TaskProvider>
			<div>
				{/* <Signup /> */}
				{/* <Login /> */}
				<Taskboard />
			</div>
		</TaskProvider>
	);
};

export default App;
