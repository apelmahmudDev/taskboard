import React, { useContext } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../../contexts/TaskContext";

const Header = () => {
	const { user } = useContext(TaskContext);
	return (
		<Fragment>
			<div className="flex justify-between items-center px-4 md:px-8 bg-indigo-900 h-20">
				{/* icon */}
				<Link to="/">
					<h1 className="text-3xl text-white font-semibold">Taskboard</h1>
				</Link>
				<div className="border-2 h-12 w-12 rounded-full overflow-hidden cursor-pointer">
					<img className="w-full h-full" src={user.userImg} alt="user" />
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
