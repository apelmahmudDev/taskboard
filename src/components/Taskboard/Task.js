import React, { useContext, useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import Modal from "react-modal";
import ModalBody from "./ModalBody";
import { TaskContext } from "../../contexts/TaskContext";

const Task = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const { tasks, setTasks } = useContext(TaskContext);
	const [singleTask, setSingleTask] = useState({});
	const [taskComplete, setTaskComplete] = useState(false);
	const inputRef = useRef();

	// task handler
	const taskHandler = () => {
		const inputText = inputRef.current.value.trim();
		if (inputText.length > 0) {
			const newTask = {
				id: new Date(),
				task: inputText,
				complete: false,
			};
			setTasks([...tasks, newTask]);
		}
		inputRef.current.value = "";
	};
	console.log("j", singleTask);
	// Add task details
	const saveDetails = (details, taskId) => {
		const selectedTask = tasks.find((task) => task.id === taskId);
		selectedTask.details = details;

		const filteredTasks = tasks.filter((task) => task.id !== taskId);
		const updatedTasks = [...filteredTasks, selectedTask];
		setTasks(updatedTasks);
	};

	// add task date
	const addDate = (taskDate, taskId) => {
		const selectedTask = tasks.find((task) => task.id === taskId);
		selectedTask.date = taskDate;

		const filteredTasks = tasks.filter((task) => task.id !== taskId);
		const updatedTasks = [...filteredTasks, selectedTask];
		setTasks(updatedTasks);
	};

	// handle delete task
	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
		setIsOpen(false);
	};

	const IsCompleteHandler = (taskId) => {
		setTaskComplete(!taskComplete);
		const selectedTask = tasks.find((task) => task.id === taskId);
		selectedTask.complete = taskComplete;

		const filteredTasks = tasks.filter((task) => task.id !== taskId);
		const updatedTasks = [...filteredTasks, selectedTask];
		setTasks(updatedTasks);
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
						<HiOutlinePlusSm size="1.5rem" className="cursor-pointer" />
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
						<button
							onClick={() => deleteTask(singleTask.id)}
							className="text-indigo-900"
						>
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
