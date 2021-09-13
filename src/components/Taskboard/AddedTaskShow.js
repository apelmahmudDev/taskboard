import React from "react";
import { BsPencil } from "react-icons/bs";
import { IoCheckmarkSharp } from "react-icons/io5";

const AddedTaskShow = ({ task, openModal, IsCompleteHandler }) => {
	return (
		<div key={task.id} className="flex items-start my-3 overflow-hidden">
			<button
				onClick={() => IsCompleteHandler(task.id)}
				className="text-green-500 rounded-full mr-3"
			>
				{!task.complete && (
					<div className="w-8 h-8 border border-indigo-900 hover:bg-gray-100 rounded-full"></div>
				)}
				{task.complete && (
					<IoCheckmarkSharp
						size="1.9rem"
						className="cursor-pointer text-green-500 border border-green-500 rounded-full"
					/>
				)}
			</button>
			<div>
				{/* task title */}
				<div className="text-lg text-indigo-900 w-full">{task.task}</div>
				{/* task details */}
				<p className="text-sm text-gray-500">{task.details}</p>
				{task.date && (
					<div className="bg-indigo-100 inline-block px-2 py-1 rounded text-indigo-900 text-sm font-semibold mt-2">
						{task.date}
					</div>
				)}
			</div>
			{/* edit icon */}
			<button onClick={() => openModal(task.id)} className="flex-1 text-right">
				<BsPencil className="inline text-indigo-900" size="1.3rem" />
			</button>
		</div>
	);
};

export default AddedTaskShow;
