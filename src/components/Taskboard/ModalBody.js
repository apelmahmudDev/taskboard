import React, { useRef } from "react";

const ModalBody = ({ addDate, saveDetails }) => {
	const detailsRef = useRef();

	return (
		<div className="w-96">
			<p className="text-lg text-indigo-900">Scrum meeting</p>
			<textarea
				className="my-3 block w-full p-2 h-16 outline-none text-indigo-900 text-lg"
				type="text"
				ref={detailsRef}
				placeholder="Add details"
			/>
			<div className="flex justify-between">
				<button
					onClick={() => addDate(new Date().toLocaleDateString())}
					className="text-lg text-indigo-900 hover:text-indigo-800"
				>
					Add date
				</button>
				<button
					onClick={() => saveDetails(detailsRef.current.value)}
					className="text-lg text-indigo-900 hover:text-indigo-800"
				>
					Save
				</button>
			</div>
			<button className="text-lg text-indigo-900 cursor-pointer hover:text-indigo-800">
				Move to another list
			</button>
		</div>
	);
};

export default ModalBody;
