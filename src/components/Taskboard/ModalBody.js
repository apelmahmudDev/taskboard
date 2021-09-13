import React, { useRef } from "react";

const ModalBody = ({ addDate, saveDetails, singleTask }) => {
	const detailsRef = useRef();

	return (
		<div className="w-96">
			<p className="text-lg text-indigo-900">{singleTask.task}</p>
			<textarea
				className="my-5 block w-full p-2 h-20 outline-none text-indigo-900 text-lg rounded"
				type="text"
				ref={detailsRef}
				defaultValue={singleTask.details}
				placeholder="Add details"
			/>
			<div className="flex justify-between">
				<button
					onClick={() =>
						addDate(new Date().toLocaleDateString(), singleTask.id)
					}
					className="text-lg text-indigo-900 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-900 rounded px-1"
				>
					Add date
				</button>
				<button
					onClick={() => saveDetails(detailsRef.current.value, singleTask.id)}
					className="text-lg text-indigo-900 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-900 rounded px-1"
				>
					Save
				</button>
			</div>
			<button className="text-lg text-indigo-900 cursor-pointer hover:text-indigo-800 mt-3">
				Move to another list
			</button>
		</div>
	);
};

export default ModalBody;
