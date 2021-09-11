import React from "react";
import { Fragment } from "react";

const Header = () => {
	return (
		<Fragment>
			<div className="flex justify-between items-center px-4 md:px-8 bg-indigo-900 h-20">
				{/* icon */}
				<h1 className="text-3xl text-white font-semibold">Taskboard</h1>
				<div className="h-12 w-12 rounded-full overflow-hidden">
					<img
						className="w-full h-full"
						src="https://i.picsum.photos/id/77/1631/1102.jpg?hmac=sg0ArFCRjP1wlUg8vszg5RFfGiXZJkWEtqLLCRraeBw"
						alt=""
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
