import React, { useContext, useEffect, useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";
import { FiTrash } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { BsPencil } from "react-icons/bs";
import Modal from "react-modal";
import ModalBody from "./ModalBody";
import { TaskContext } from "../../contexts/TaskContext";

const Task = () => {
	const { tasks, setTasks } = useContext(TaskContext);
	const [singleTask, setSingleTask] = useState({});
	const inputRef = useRef();

	// task handler
	const taskHandler = () => {
		const inputText = inputRef.current.value.trim();
		if (inputText.length > 0) {
			const newTask = {
				id: new Date(),
				task: inputText,
			};
			setTasks([...tasks, newTask]);
		}
		inputRef.current.value = "";
	};

	// Add task details
	const saveDetails = (details, taskId) => {
		const selectedTask = tasks.find((task) => task.id === taskId);
		selectedTask.details = details;
	};

	// add task date
	const addDate = (taskDate, taskId) => {
		const selectedTask = tasks.find((task) => task.id === taskId);
		selectedTask.date = taskDate;
	};

	// modal custom styles
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			backgroundColor: "#f1e6e680",
		},
	};

	Modal.setAppElement("*");

	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal(taskId) {
		setIsOpen(true);
		setSingleTask(tasks.find((task) => task.id === taskId));
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<div className="m-8 p-3 border-2 border-indigo-200 max-w-sm">
				{/* task title*/}
				<div className="flex justify-between w-full mb-4 mt-2">
					<h3 className="text-lg text-indigo-900 font-semibold">My Task</h3>
					<MdMoreVert
						size="1.5rem"
						className="cursor-pointer text-indigo-900"
					/>
				</div>
				{/* task input field*/}
				<div className="flex items-center">
					<button
						onClick={() => taskHandler()}
						className="bg-indigo-900 hover:bg-indigo-800 text-white rounded-full p-1 mr-3"
					>
						<HiOutlinePlus size="1.5rem" className="cursor-pointer" />
					</button>
					<input
						type="text"
						placeholder="Add a task"
						ref={inputRef}
						className="text-lg outline-none text-indigo-900 bg-white"
					/>
				</div>
				{/* task added */}
				<div className="mt-3">
					{tasks?.map((task) => (
						<div key={task.id} className="flex items-start my-3">
							<button
								onClick={() => taskHandler()}
								className="bg-indigo-900 hover:bg-indigo-800 text-white rounded-full p-1 mr-3"
							>
								<HiOutlinePlus size="1.5rem" className="cursor-pointer" />
							</button>
							<div>
								{/* task title */}
								<p className="text-lg text-indigo-900">{task.task}</p>
								{/* task details */}
								<p className="text-sm text-gray-500">{task.details}</p>
								{task.date && (
									<div className="bg-indigo-100 inline-block px-2 py-1 rounded text-indigo-900 text-sm font-semibold mt-2">
										{task.date}
									</div>
								)}
							</div>
							{/* edit icon */}
							<button
								onClick={() => openModal(task.id)}
								className="flex-1 text-right"
							>
								<BsPencil className="inline text-indigo-900" size="1.3rem" />
							</button>
						</div>
					))}
				</div>
			</div>
			{/* add task details  modal*/}
			<div>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
				>
					<div className="mb-4 flex justify-between">
						<button className="text-indigo-900">
							<FiTrash size="1.3rem" />
						</button>
						<button className="text-indigo-900" onClick={closeModal}>
							<ImCross size="1rem" />
						</button>
					</div>
					{/* modal body */}
					<ModalBody
						addDate={addDate}
						saveDetails={saveDetails}
						singleTask={singleTask}
					/>
				</Modal>
			</div>
		</div>
	);
};

export default Task;
