import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [user, setUser] = useState({ isSigned: false });

	const taskboardData = () => {
		const localData = localStorage.getItem("myTasks");
		return localData ? JSON.parse(localData) : [];
	};

	// Tasks save in the localStorage
	useEffect(() => {
		localStorage.setItem("myTasks", JSON.stringify(tasks || []));
	}, [tasks]);

	console.log(taskboardData());

	// setTasks(JSON.parse(localStorage.getItem("myTasks")) || []);

	const value = {
		tasks,
		setTasks,
		user,
		setUser,
	};
	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
