import React, { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	console.log(tasks);

	const value = {
		tasks,
		setTasks,
	};
	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
