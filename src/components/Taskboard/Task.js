import React, { useContext, useRef, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { HiOutlinePlusSm } from "react-icons/hi";
import Modal from "react-modal";
import ModalBody from "./ModalBody";
import { TaskContext } from "../../contexts/TaskContext";
import AddedTaskShow from "./AddedTaskShow";

const Task = () => {
	const { tasks, setTasks } = useContext(TaskContext);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [singleTask, setSingleTask] = useState({});
	const inputRef = useRef();

	// task handler
	const taskHandler = (e) => {
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
		e.preventDefault();
	};

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

	// set complete or not status
	const IsCompleteHandler = (taskId) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, complete: !task.complete };
				}
				return task;
			})
		);
	};

	// MODAL AREA
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
			border: "1px solid #C4C0C0",
			boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
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
			<div className="m-4 sm:m-8 p-3 border-2 border-indigo-200 max-w-md shadow rounded">
				{/* task title*/}
				<div className="flex justify-between w-full mb-4 mt-2">
					<h3 className="text-lg text-indigo-900 font-semibold">My Task</h3>
					<MdMoreVert
						size="1.5rem"
						className="cursor-pointer text-indigo-900"
					/>
				</div>
				{/* task input field*/}
				<form onSubmit={taskHandler} className="flex items-center">
					<button
						type="submit"
						className="bg-indigo-900 hover:bg-indigo-800 text-white rounded-full p-1 mr-3"
					>
						<HiOutlinePlusSm size="1.5rem" className="cursor-pointer" />
					</button>
					<input
						type="text"
						placeholder="Add a task"
						ref={inputRef}
						className="text-lg outline-none text-indigo-900 w-full bg-white"
					/>
				</form>
				{/* Display the task added*/}
				<div className="mt-3">
					{tasks?.map((task) => (
						<AddedTaskShow
							key={task.id}
							task={task}
							openModal={openModal}
							IsCompleteHandler={IsCompleteHandler}
						/>
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
