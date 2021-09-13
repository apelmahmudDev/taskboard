import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
	return (
		<div className="grid place-items-center h-screen">
			<div>
				<h2 className="mb-3 text-2xl text-indigo-900 font-semibold">
					Page not found!
				</h2>
				<div className="text-lg">
					<span className="text-indigo-900 mr-2">Goto the</span>
					<Link to="/">
						<span className="text-white text-lg bg-indigo-900 hover:bg-indigo-800 rounded px-2 py-1">
							Homepage
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Notfound;
