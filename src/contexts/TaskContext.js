import React, { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

// get user data from localStorage
const getUserLocalData = () => {
	const user = JSON.parse(localStorage.getItem("user")) || [];
	return user;
};

// get task data from localStorage
const getTasksLocalData = () => {
	const localData = JSON.parse(localStorage.getItem("myTasks")) || [];
	return localData;
};

const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(getTasksLocalData());
	const [user, setUser] = useState(getUserLocalData());

	console.log("from context", tasks);
	// save user data to localStorage
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user || []));
	}, [user]);

	// save task data to localStorage
	useEffect(() => {
		localStorage.setItem("myTasks", JSON.stringify(tasks || []));
	}, [tasks]);

	const value = {
		tasks,
		setTasks,
		user,
		setUser,
	};
	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
